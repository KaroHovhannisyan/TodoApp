import React from 'react';
import ReactDom from 'react-dom';
import LoginPage from './components/loginPage.jsx';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import About from './components/about.jsx';
import SessionAction from './actions/SessionAction'


window.handleGoogleApiLoaded = () =>{

SessionAction.authorize(true,renderApp())


}


function renderApp() {
    ReactDom.render(
      <Router>
            <Switch>
                <Route exact path="/" component={LoginPage}  />
                <Route  path="/about" component={About}      />
            </Switch>
      </Router>,


        document.getElementById('app'));

}
