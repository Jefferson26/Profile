import React from "react";
import Styles from "./contact.css";
import Github from "../../resources/images/github.png";
import Linkendin from "../../resources/images/linkendin.png";
import Flip from 'react-reveal/Flip';

export default function Footer() {

  return (
    <div >
        <div className={Styles.mainFooterDiv}>
            <div>
                <p className={Styles.copyrights}> Ⓒ 2019 Jefferson Barbosa</p>
            </div>

            <Flip bottom>
                <div className={Styles.footerIcons}>
                    <a href="https://github.com/Jefferson26">
                        <img alt="github" src={Github} className={Styles.iconContact}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jeffersonsb/">
                        <img alt="linkendin" src={Linkendin} className={Styles.iconContact}/>
                    </a>
                </div>
            </Flip>
        </div>
    </div>
  );
}