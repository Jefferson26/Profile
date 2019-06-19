import React, { Component } from "react";
import styles from './landingpage.css';
import Typing from 'react-typing-animation';

class Landing extends Component{
    render(){
        return (
            <div className={styles.container}>
                <p className={styles.welcomeText}> 
                    <Typing speed={10}>
                        <span className={styles.welcomeIntroduction}>Hello, I'm </span>
                        <span className={styles.welcomeName}> Jefferson Barbosa</span>.
                        <p className={styles.welcomeJob}> <span>I'm a full stack web developer.</span> </p>
                    </Typing>
                </p>
            </div>
        )
    }

}

export default Landing;