import React, { Component } from "react";
import Styles from "./projects.css";
import Tittle from "../tittle";
import TimeLine from "./timeline";

class Projects extends Component{
    render(){
        return (
            <div className={Styles.mainDivProjects}>
                <Tittle tittleName={"Projects"}/>
                <TimeLine/>
            </div>
        )
    }

}

export default Projects;
