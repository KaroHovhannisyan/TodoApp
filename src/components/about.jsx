import React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import SessionAction from '../actions/SessionAction';
const style = {
    margin: 12,
};


class About extends React.Component{
    render (){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Paper zDepth={5} >

                <h1>Hello You Are User</h1>



            </Paper>
            </MuiThemeProvider>
        )
    }




}

export default About;