import React, { Component } from "react";
import Profile from "./profile";
import Skills from "./skills";
import Styles from "./aboutme.css";
import Tittle from "../tittle";

class About extends Component{
    render(){
        return (
            <div className={Styles.mainDivAbout}>
                <Tittle/>
                <Profile/>
                <Skills/>
            </div>
        )
    }

}

export default About;