import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import api from '../api/index.js'

const style = {
    margin: 12,
};


class LoginPage extends React.Component{


    loginButtonPressed(){
        console.log('Pressed');
        api.authorize({immediate:false});
    }

    render (){
        return(
            <div className="login">
                <div className="info">
                    <h1>ToDo Application</h1>
                    <h4>Google API</h4>
                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                        <RaisedButton
                            label="Login With Google"
                            onClick = {this.loginButtonPressed}
                        />
                    </MuiThemeProvider>
                </div>
                <img src="img/back.png"/>


            </div>
        )
    }




}

export default LoginPage;