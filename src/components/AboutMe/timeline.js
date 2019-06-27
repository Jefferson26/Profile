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

const content = [
  {company:"OSF Global Service", 
  date:"Mar 2018 - Currently",
  description:"Web Developer using Java/Spring, Javascript/Knockout.js/ Thymeleaf, HTML/CSS/Bootstrap, " +
  "JasperReports, Oracle, Hibernate, Maven, GitHub and JIRA. " +
  "Also responsible for developing systems integration from message exchange using REST and SOAP protocols."},

  {company:"GREat", 
  date:"Jul 2015 - Dec 2018",
  description:"Development and execution of test cases. Automation of test cases with the Selenium tool. " +
  "Developing scripts for handling files from the Testlink tool. " + 
  "Study of cloning in customization classes of a Software Product Line " +
  "Development of plugins for JIRA " +
  "Development of company website using PHP, HTML/CSS, JavaScript and Bootstrap " +
  "Study about Dynamic Software Product Lines " +
  "Development of the website containing information about the study using the Joomla platform."
  },

  {company:"Fraile & Blanco", 
  date:"Summer 2013",
  description:"Back and Front-end development of web sites using PHP language with Javascript, " +
  "JQuery, HTML, CSS and MySQL. " +
  "Development of Android applications."},

];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Content infoJobs={content[step]}/>;
    case 1:
      return <Content infoJobs={content[step]}/>;
    case 2:
      return <Content infoJobs={content[step]}/>;
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