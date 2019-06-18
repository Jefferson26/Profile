import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Resume from './components/resume';
import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Contact from './components/contact';

const Router = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
)

export default Router;