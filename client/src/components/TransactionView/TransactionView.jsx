import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    width: "90%"
  },
  button: {
    marginTop: "1em",
    marginRight: "1em"
  },
  actionsContainer: {
    marginBottom: "2em"
  },
  resetContainer: {
    padding: "2em"
  }
};

class TransactionView extends React.Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0
    };
  }

  render() {
    const steps = [
      "Getting Transaction Hash",
      "Getting Receipt",
      "Getting Confirmation",
      "Successfully Added On blockchain"
    ];
    const { classes, stepCount, stepMessage } = this.props;
    const { activeStep } = this.state;
    return (
      <div className={classes.root}>
        <Stepper activeStep={stepCount} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{stepMessage}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

export default withStyles(styles)(TransactionView);
