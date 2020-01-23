import React from "react";
import {
  Grid,
  Snackbar,
  TextField,
  Button,
  withStyles,
  Backdrop
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import TransactionView from "../TransactionView/TransactionView";

import { addTransactionToFirestore } from "../../firebase/firebase.utils";

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

class TransferRecord extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      message: "",
      severity: "",
      transactionScreen: false,
      stepCount: 0,
      stepMessage: "Loading . . . ."
    };
  }

  handleForm = event => {
    event.preventDefault();
    const { land_contract, account } = this.props;
    const componentThis = this;
    let myCount = 0;
    const plot_num = document.querySelector("#plot_num").value;
    const street_num = document.querySelector("#street_num").value;
    const city = document.querySelector("#city").value;
    const province = document.querySelector("#province").value;
    const country = document.querySelector("#country").value;
    const previous_owner = document.querySelector("#previous_owner").value;
    const wintness_1_id = document.querySelector("#wintness_1_id").value;
    const wintness_2_id = document.querySelector("#wintness_2_id").value;
    this.setState({
      transactionScreen: true,
      stepCount: myCount,
      stepMessage: "Working..."
    });
    const {
      methods: { getLength, addLandRecode, landArr }
    } = land_contract;
    addLandRecode(
      plot_num,
      street_num,
      city,
      province,
      country,
      previous_owner,
      wintness_1_id,
      wintness_2_id
    )
      .send({ from: account })
      .then(async res => {
        const { transactionHash } = res;
        componentThis.setState({
          open: true,
          message: `Transaction Hash \n ${transactionHash}`,
          severity: "success",
          stepCount: myCount + 1,
          stepMessage: "Done"
        });
        try {
          const arrIndex = await getLength().call({
            from: account
          });
          await addTransactionToFirestore(transactionHash, {
            ...res,
            arrIndex
          });
        } catch (error) {
          console.error(error);
          this.showError(error.message);
        }
        setTimeout(() => {
          componentThis.screenReset();
        }, 4000);
      })
      .catch(error => {
        this.showError(error.message);
        setTimeout(() => {
          componentThis.screenReset();
        }, 4000);
      });
  };

  showError = errorMessage => {
    const componentThis = this;
    setTimeout(() => {
      componentThis.setState({
        transactionScreen: false,
        open: true,
        message: errorMessage,
        severity: "error"
      });
    }, 4000);
  };

  screenReset = () => {
    this.setState({
      open: false,
      stepCount: 0,
      transactionScreen: false
    });
    document.querySelector("#add_record_form").reset();
  };

  render() {
    const { classes } = this.props;
    const {
      open,
      message,
      severity,
      transactionScreen,
      stepCount,
      stepMessage
    } = this.state;
    return (
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={this.handleForm}
        id="add_record_form"
      >
        <Backdrop open={transactionScreen} className={classes.backdrop}>
          <TransactionView stepCount={stepCount} stepMessage={stepMessage} />
        </Backdrop>
        <Grid container direction="row" justify="center" alignItems="center">
          <TextField
            id="previous_owner"
            type="number"
            required
            label="Previous Owner Id"
          />

          <TextField
            id="new_owner"
            type="number"
            required
            label="New Owner Id"
          />

          <TextField
            id="wintness_1_id"
            type="number"
            required
            label="Witness One Id"
          />

          <TextField
            id="wintness_2_id"
            type="number"
            required
            label="Witness Two Id"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.submitButton}
        >
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
        <Snackbar open={open}>
          <Alert severity={severity}>{message}</Alert>
        </Snackbar>
      </form>
    );
  }
}

export default withStyles(styles)(TransferRecord);