import React from "react";
import Profile from "../../resources/images/avatar1.png";
import Styles from "./aboutme.css";
import Fade from 'react-reveal/Fade';

export default function PersonalInfos() {

  return (
    <div className={Styles.mainProfile}>
        <Fade left delay={600}>
            <div className={Styles.profileInfo}>
                <img alt="Jeff B." src={Profile} className={Styles.avatarImg}/>
                <div className={Styles.description}>
                    <h4 className={Styles.tittleDescription}>Who am I?</h4>
                    <p className={Styles.descriptionBody}> I'm a full-stack web developer on OSF Global Service in Brazil, CE. 
                      Got my BS and MS degrees at Universidade Federal do Ceará. I love
                      programming, learning new technologies, traveling, and hanging out with my friends. 
                      I'm always ready for a new challenge. =)</p>
                </div>
            </div>
        </Fade >
    </div>
  );
}