import React, {Component, Fragment} from "react";
import {Pager} from "react-bootstrap";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ReactPageScroller from "react-page-scroller";
import LandingPage from "./components/LandingPage/landingpage";
import Aboutme from "./components/AboutMe/aboutme";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";

import styles from "./index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    render() {
        return <Fragment>
            <Pager className="pagination-additional-class" bsSize="large">
                <AppBar>
                    <Toolbar className={styles.bar}>
                        <Pager.Item key={0} eventKey={0} onSelect={this.goToPage}><Button > <span className={styles.content}>Home </span></Button></Pager.Item>
                        <Pager.Item key={1} eventKey={1} onSelect={this.goToPage}><Button > <span className={styles.content}>About </span></Button></Pager.Item>
                        <Pager.Item key={2} eventKey={2} onSelect={this.goToPage}><Button > <span className={styles.content}>Projects </span></Button></Pager.Item>
                        <Pager.Item key={3} eventKey={3} onSelect={this.goToPage}><Button > <span className={styles.content}>Contact </span></Button></Pager.Item>
                    </Toolbar>
                </AppBar>
            </Pager>
            
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <LandingPage/>
                <Aboutme/>
                <Resume/>
                <Contact/>
            </ReactPageScroller>
        </Fragment>
    }
}

export default App;