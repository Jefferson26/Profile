import React from "react";
import Profile from "../../resources/images/avatar1.png";
import Styles from "./aboutme.css";
import Fade from 'react-reveal/Fade';

export default function PersonalInfos() {

  return (
    <div className={Styles.mainSkill}>
        <Fade right >
            <div className={Styles.skillsInfo}>
                <img alt="Jeff B." src={Profile} className={Styles.avatarImg}/>
                <div className={Styles.description}>
                    <h4 className={Styles.tittleDescription}>Who am I?</h4>
                    <span> Description of my life here and more things asdad a asdas adsa</span>
                    <span> Description of my life here and more things</span>
                    <span> Description of my life here and more things</span>
                    <span> Description of my life here and more things</span>
                </div>
            </div>
        </Fade >
    </div>
  );
}