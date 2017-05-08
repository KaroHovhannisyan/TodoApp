import React from 'react';
import ReactDom from 'react-dom';
import LoginPage from './components/loginPage.jsx';
import {Router,Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import api from './api'

const newHistory = createBrowserHistory();

window.handleGoogleApiLoaded = () =>{
   // api.authorize({immediate:false});


}

ReactDom.render(
    <Router history= {newHistory}>

        <Route path="/" component={LoginPage} />

    </Router>,


    document.getElementById('app'));