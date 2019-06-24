import React, { Component } from "react";
import Typing from 'react-typing-animation';

import Styles from './landingpage.css';

class Landing extends Component{
    render(){
        return (
            <div className={Styles.container}>
                
                    <Typing speed={50} cursorClassName={Styles.cursor}>
                        <p className={Styles.welcomeText}> 
                            <span> Hello, I'm </span><br/>
                            <span className={Styles.welcomeName}> Jefferson Barbosa</span>. <br/>
                            <span className={Styles.welcomeJob}>I'm a full stack <br/> web developer.</span>
                        </p>
                    </Typing>
                
            </div>
        )
    }

}

export default Landing;