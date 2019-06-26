import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';
import Content from './contentTimeLine';
import Styles from './projects.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    textAlign: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
    return [
      <p>Born</p>, 
      <p>Education</p>, 
      <p>Work</p>
    ];
  }

function getStepContent(step) {
    switch (step) {
      case 0:
        return <Content/>;
      case 1:
        return <Content/>;
      case 2:
        return <Content/>;
      default:
        return 'Unknown step';
    }
  }

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} icon={<div className={Styles.stepCircleIco}/>}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
      </div>
    </div>
  );
}