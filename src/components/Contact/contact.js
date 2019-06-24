import React, { Component } from "react";
import Styles from "./contact.css";
import Tittle from "../tittle";

class Contact extends Component{
    render(){
        return (
            <div className={Styles.mainDivContact}>
                <Tittle/>
            </div>
        )
    }

}

export default Contact;