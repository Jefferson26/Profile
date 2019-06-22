import React, { Component } from "react";
import Typing from 'react-typing-animation';

import Styles from './landingpage.css';

class Landing extends Component{
    render(){
        return (
            <div className={Styles.container}>
                <p className={Styles.welcomeText}> 
                    <Typing speed={50} cursorClassName={Styles.cursor}>
                        <span> Hello, I'm </span><br/>
                        <span className={Styles.welcomeName}> Jefferson Barbosa</span>. <br/>
                        <span className={Styles.welcomeJob}>I'm a full stack <br/> web developer.</span>
                    </Typing>
                </p>
            </div>
        )
    }

}

export default Landing;