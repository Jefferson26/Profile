import React, { Component } from "react";
import Profile from "./profile";
import Skills from "./skills";
import Styles from "./aboutme.css";

class About extends Component{
    render(){
        return (
            <div className={Styles.mainDiv}>
                <Profile/>
                <Skills/>
            </div>
        )
    }

}

export default About;