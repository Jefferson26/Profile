import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';

import Styles from "./aboutme.css";
import Fade from 'react-reveal/Fade';

const BorderLinearProgress = withStyles({
  root: {
    height: 25,
    backgroundColor: lighten('#65BCDB', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#65BCDB',
  },
})(LinearProgress);

export default function PersonalInfos() {
 
  const elements = [
    {type:"Java", value:80},
    {type:"Js", value:70},
    {type:"React", value:40},
    {type:"Html", value:70},
    {type:"SQL", value:70},
    {type:"C", value:50},
    {type:"C#", value:30}
  ];

  const items = []; 

  for (const [index, element] of elements.entries()) {
    items.push(
      <div key={index} className={Styles.skillSet}>
        <span className={Styles.skillTittle}>{element.type}</span>
        <BorderLinearProgress className={Styles.skillBar}
            variant="determinate"
            color="secondary"
            value={element.value}
          />
        <div className={Styles.skillNumber}>
          <span>{element.value}%</span>
        </div>
      </div>
    )
  }

  return (
    <div className={Styles.mainSkill}>
        <Fade right delay={1100}>
          <div className={Styles.skillsInfo}>
            {items}
          </div>
        </Fade >
    </div>
  );
}