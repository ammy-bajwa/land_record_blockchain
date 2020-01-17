import React from "react";
import {
  Grid,
  Snackbar,
  TextField,
  Button,
  withStyles
} from "@material-ui/core";

const styles = {
  root: {
    "& .MuiTextField-root": {
      margin: 10,
      width: 200
    }
  },
  submitButton: {
    marginTop: 15
  }
};

class InputRecord extends React.Component {
  handleForm = event => {
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={this.handleForm}
      >
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
      </form>
    );
  }
}

export default withStyles(styles)(InputRecord);
