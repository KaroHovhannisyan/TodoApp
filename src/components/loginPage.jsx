import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import SessionAction from '../actions/SessionAction';
import SessionStore from '../stores/SessionStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './components.css'


const style = {
    margin: 12,
};

function getStateFromFlux() {
    return (SessionStore.isLoggedIn());

}


class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            isLoggined: false
        }

    }

    shouldComponentUpdate(nextProps,nextState){
        if (!nextState.isLoggined) {
            return false;
        } else {
           this.props.history.replace('/taskListPage');
            return true;
        }
    }

    componentDiDMount () {
        SessionStore.addChangeListener(this._onChange);
    }
    componentWillMount () {

        SessionStore.removeChangeListener(this._onChange);
    }

    loginButtonPressed() {
        SessionAction.authorize();
        this.setState({isLoggined:getStateFromFlux()});

    }
    _onChange () {
        this.setState(getStateFromFlux());
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
                            onClick = {this.loginButtonPressed.bind(this)}
                        />
                    </MuiThemeProvider>
                </div>
                <img src="img/back.png"/>
            </div>
        )
    }




}

export default LoginPage;