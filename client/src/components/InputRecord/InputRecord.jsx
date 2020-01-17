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

class InputRecord extends React.Component {
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
    const componentThis = this;
    let myCount = 0;
    event.preventDefault();
    this.setState({
      open: true,
      message: "Data Added Successfully",
      severity: "success",
      transactionScreen: true
    });
    const myStepper = setInterval(() => {
      componentThis.setState({
        stepCount: myCount,
        stepMessage: `Message for ${myCount}`
      });
      myCount++;
      if (myCount > 4) {
        clearInterval(myStepper);
      }
    }, 3000);
    // myContract.methods
    //   .myMethod(123)
    //   .send({ from: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe" })
    //   .on("transactionHash", function(hash) {
    //     // ...
    //   })
    //   .on("receipt", function(receipt) {
    //     // ...
    //   })
    //   .on("confirmation", function(confirmationNumber, receipt) {
    //     // ...
    //   })
    //   .on("error", console.error);
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
      >
        <Backdrop open={transactionScreen} className={classes.backdrop}>
          <TransactionView stepCount={stepCount} stepMessage={stepMessage} />
        </Backdrop>
        <Grid container direction="row" justify="center" alignItems="center">
          <TextField id="plot_num" required label="Plot Number" />
          <TextField id="street_num" required label="Street Number" />
          <TextField id="city" required label="City" />
          <TextField id="province" required label="Province" />
          <TextField id="country" required label="Country" />
          <TextField id="wintness_1_id" required label="Witness One Id" />
          <TextField id="wintness_2_id" required label="Witness Two Id" />
          <TextField id="previous_owner" required label="Previous Owner Id" />
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
        <Snackbar open={open} autoHideDuration={5000}>
          <Alert severity={severity}>{message}</Alert>
        </Snackbar>
      </form>
    );
  }
}

export default withStyles(styles)(InputRecord);

{
  /* <Alert severity="error">This is an error message!</Alert>
<Alert severity="warning">This is a warning message!</Alert>
<Alert severity="info">This is an information message!</Alert>
<Alert severity="success">This is a success message!</Alert> */
}
