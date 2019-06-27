import React, { Component } from "react";
import Styles from "./projects.css";
import Tittle from "../tittle";
import TimeLine from "./timeline";

class Projects extends Component{
    render(){
        return (
            <div className={Styles.mainDivProjects}>
                <Tittle tittleName={"Portfolio"}/>
                <div className={Styles.timelineDiv}>
                    <TimeLine />
                </div>
            </div>
        )
    }

}

export default Projects;
