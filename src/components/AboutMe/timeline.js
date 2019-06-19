import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';
import StepContent from '@material-ui/core/StepContent';

import Style from "./aboutme.css";
import Born from '../../resources/images/stork.png';
import Education from '../../resources/images/location.png';
import Work from '../../resources/images/briefcase.png';
import Content from "./content";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
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
    <img src={Born} alt="Born"/>, 
    <img src={Education} alt="Education"/>, 
    <img src={Work} alt="Work"/>
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
      <Stepper classNAme={Style} nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)}>
              {label}
            </StepButton>

            <StepContent>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}