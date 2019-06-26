import React, { Component } from "react";
import Styles from "./contact.css";
import Tittle from "../tittle";
import Footer from "./footer";
import EmailForm from "./emailForm";

class Contact extends Component{
    render(){
        return (
            <div>
                <div className={Styles.mainDivContact}>
                    <Tittle themeTittle={Styles.tittle} themeUnderline={Styles.underline} tittleName={"Contact"}/>
                    <EmailForm/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;