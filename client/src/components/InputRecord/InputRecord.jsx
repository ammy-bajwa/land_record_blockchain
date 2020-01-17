import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  submitButton: {
    marginTop: theme.spacing(4)
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField id="standard-number" label="Plot Number" />
        <TextField id="standard-number" label="Street Number" />
        <TextField id="standard-number" label="City" />
        <TextField id="standard-number" label="Province" />
        <TextField id="standard-number" label="Country" />
        <TextField id="standard-number" label="Witness One Id" />
        <TextField id="standard-number" label="Witness Two Id" />
        <TextField id="standard-number" label="Previous Owner Id" />
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
