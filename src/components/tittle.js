import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Styles from "./tittle.css";

class Tittle extends Component{
    render(){
        return (
            <div className={Styles.rootDivTittle}>
                <Fade cascade left>
                    <h1 className={Styles.tittle + " " + this.props.themeTittle }>{
                        this.props.tittleName}
                    </h1>
                </Fade>
                <Fade right>
                    <div className={Styles.underline + " " + this.props.themeUnderline}></div>
                </Fade>
            </div>
        )
    }

}

export default Tittle;