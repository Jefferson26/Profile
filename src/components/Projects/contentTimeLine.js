import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Styles from "./projects.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    fontFamily: "Raleway, sans-serif",
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" className={Styles.tittleJob}>
          <div className={Styles.tittleJob}> 
            {props.infoJobs.company}
          </div>
        </Typography>
        <Typography component="div" >
          <div > {props.infoJobs.description}</div>
        </Typography>
      </Paper>
    </div>
  );
}