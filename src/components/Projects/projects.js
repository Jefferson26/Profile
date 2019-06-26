import React, { Component } from "react";
import Styles from "./projects.css";
import Tittle from "../tittle";

class Projects extends Component{
    render(){
        return (
            <div className={Styles.mainDivProjects}>
                <Tittle tittleName={"Projects"}/>
            </div>
        )
    }

}

export default Projects;
