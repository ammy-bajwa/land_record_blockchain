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
  },
  content: {
    wordBreak: "break-all !important"
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
      "Saving Data On Blockchain",
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
              <StepContent className={classes.content}>
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
