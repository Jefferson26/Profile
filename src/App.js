import React, {Component, Fragment} from "react";
import {Pager} from "react-bootstrap";

import ReactPageScroller from "react-page-scroller";
import LandingPage from "./components/landingpage";
import Aboutme from "./components/aboutme";
import Resume from "./components/resume";
import Contact from "./components/contact";

import "./index.css";

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

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 4; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return <Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <LandingPage/>
                <Aboutme/>
                <Resume/>
                <Contact/>
            </ReactPageScroller>
            <Pager className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pager>
        </Fragment>
    }
}

export default App;