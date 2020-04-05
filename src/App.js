// Libraries
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import axios from 'axios';

// Containers
import LoginContainer from './containers/login_container.jsx'
import HeaderContainer from './containers/header_container.jsx'
import MainContainer from './containers/main_container.jsx'



// Style Sheets
import './app.scss'
import './styles/utils/responsiveness.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
  }

  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LoginContainer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
