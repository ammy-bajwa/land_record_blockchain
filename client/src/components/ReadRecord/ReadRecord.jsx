import React from "react";
import {
  Grid,
  Snackbar,
  TextField,
  Button,
  withStyles
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import DataTable from "../DataTable/DataTable";
import Loading from "../Loading/Loading";

import { getTransactionFromFirestore } from "../../firebase/firebase.utils";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = {
  root: {
    "& .MuiTextField-root": {
      margin: 10,
      width: 200
    }
  },
  submitButton: {
    marginTop: 15
  },
  backdrop: {
    zIndex: 1,
    color: "#fff"
  }
};

class ReadRecord extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      open: false,
      message: "",
      severity: "",
      loadingScreen: false
    };
  }

  handleForm = async event => {
    event.preventDefault();
    const { land_contract, account } = this.props;
    const componentThis = this;
    const userTransactionHash = document.querySelector("#transactionHash")
      .value;
    this.setState({
      loadingScreen: true
    });
    const transactionData = await getTransactionFromFirestore(
      userTransactionHash
    );
    const {
      blockHash,
      blockNumber,
      from,
      gasUsed,
      to,
      transactionHash
    } = transactionData;

    const data = [
      {
        title: "Block Hash",
        details: blockHash
      },
      {
        title: "Block Number",
        details: blockNumber
      },
      {
        title: "From",
        details: from
      },
      {
        title: "Gas Used",
        details: gasUsed
      },
      {
        title: "To",
        details: to
      },
      {
        title: "Transaction Hash",
        details: transactionHash
      }
    ];
    this.setState({
      data,
      loadingScreen: false
    });
  };

  showError = errorMessage => {
    const componentThis = this;
    setTimeout(() => {
      componentThis.setState({
        loadingScreen: false,
        open: true,
        message: errorMessage,
        severity: "error"
      });
    }, 4000);
  };

  screenReset = () => {
    this.setState({
      open: false,
      loadingScreen: false
    });
    document.querySelector("#read_record_form").reset();
  };

  render() {
    const { classes } = this.props;
    const { data, open, message, severity, loadingScreen } = this.state;
    return (
      <div>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={this.handleForm}
          id="read_record_form"
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <TextField id="transactionHash" required label="Transaction Hash" />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.submitButton}
          >
            <Button type="submit" variant="contained" color="primary">
              Get Data
            </Button>
          </Grid>
          <Loading loading={loadingScreen} />
          <Snackbar open={open}>
            <Alert severity={severity}>{message}</Alert>
          </Snackbar>
        </form>
        <DataTable data={data} />
      </div>
    );
  }
}

export default withStyles(styles)(ReadRecord);

{
  /* <Alert severity="error">This is an error message!</Alert>
  <Alert severity="warning">This is a warning message!</Alert>
<Alert severity="info">This is an information message!</Alert>
<Alert severity="success">This is a success message!</Alert> */
}
