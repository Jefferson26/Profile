import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Styles from "./tittle.css";

class Tittle extends Component{
    render(){
        return (
            <div className={Styles.rootDivTittle}>
                <Fade left delay={300}>
                    <h1 className={Styles.tittle}>About Jeff</h1>
                </Fade>
                <Fade right delay={300}>
                    <div className={Styles.underline}></div>
                </Fade>
            </div>
        )
    }

}

export default Tittle;