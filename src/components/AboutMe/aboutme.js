import React, { Component } from "react";
import TimeLine from "./timeline";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from "../../resources/images/avatar1.jpg";

class About extends Component{
    render(){
        return (
            <div>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="Jeff B." src={Profile} />
                </Grid>
                <TimeLine/>
            </div>
        )
    }

}

export default About;