import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

// Components
import App from './App';
import LoginContainer from './containers/login_container.jsx';


const routing = (
  <Router>
    <div>
      <Route path="/login" component={LoginContainer} />
      <Route path="/user" component={App} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('app-base'));




