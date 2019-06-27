import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Content from "./contentTimeLine";
import Styles from "./projects.css";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width:"73%",
    marginLeft:"12.5%",
  },
}));

const content = [
  {company:"OSF Global Service", 
  date:"Mar 2018 - Currently",
  description:
    <ul className={Styles.descriptionJob}>
      <li>Development web using Java/Spring, Javascript/Knockout/Thymeleaf, HTML/CSS/Bootstrap, JasperReports, Oracle, Hibernate, Maven, GitHub and JIRA. </li>
      <li>Development of systems integration from message exchange using REST and SOAP protocols.</li>
    </ul>
  },

  {company:"GREat", 
  date:"Jul 2015 - Dec 2017",
  description:
    <ul className={Styles.descriptionJob}>
      <li>Development of scripts for handling files from the Testlink tool.</li>
      <li>Development and execution of test cases. Automation of test cases with the Selenium tool.</li>
      <li>Research on code reuse and data analytics.</li>
      <li>Development of company website using PHP, HTML/CSS and JavaScript</li>
    </ul>
  },

  {company:"Fraile & Blanco", 
  date:"Summer 2013",
  description:
  <ul className={Styles.descriptionJob}>
    <li>Development web using PHP, Javascript, JQuery, HTML, CSS and MySQL. </li>
    <li>Development of Android applications.</li>
  </ul>
  },
];

function getSteps() {
  return [content[0].date, content[1].date, content[2].date];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Content infoJobs={content[0]}/>;
    case 1:
      return <Content infoJobs={content[1]}/>;
    case 2:
      return <Content infoJobs={content[2]}/>;
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
    <div>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)}>
              <div className={Styles.iconColor}></div>{label}
            </StepButton>
            
          </Step>
        ))}
      </Stepper>
      <div className={classes.instructions}>
        {getStepContent(activeStep)}
      </div>
    </div>
  );
}