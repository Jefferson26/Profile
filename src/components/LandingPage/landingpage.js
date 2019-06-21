import React, { Component } from "react";
import Typing from 'react-typing-animation';

import Styles from './landingpage.css';

class Landing extends Component{
    render(){
        return (
            <div className={Styles.container}>
                <p className={Styles.welcomeText}> 
                    <Typing speed={50} cursorClassName={Styles.cursor}>
                        <span> Hello, I'm </span>
                        <span className={Styles.welcomeName}> Jefferson Barbosa</span>.
                        <p className={Styles.welcomeJob}> <span>I'm a full stack web developer.</span> </p>
                    </Typing>
                </p>
            </div>
        )
    }

}

export default Landing;