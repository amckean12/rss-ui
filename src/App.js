// Libraries
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Containers
import LoginContainer from './containers/login_container.jsx';
import MainContainer from './containers/main_container.jsx';

// Components
import ErrorComponent from './components/error_component.jsx';


// Style Sheets
import './app.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      error_type: '400',
     };
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data
    })
  }

  render(){
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/'
                render={props => (
                  <LoginContainer 
                    {...props} 
                    handleLogin={this.handleLogin} 
                    loggedInStatus={this.state.isLoggedIn}/>
                )} 
              />
              <Route exact path='/profile' 
                render={props => (
                  <MainContainer 
                    {...props} 
                    handleLogin={this.handleLogin} 
                    loggedInStatus={this.state.isLoggedIn}
                    data={this.state.user}/>
                )} />
              <Route exact path='/error' 
                render={props => (
                  <ErrorComponent 
                    {...props} 
                    errorState={this.state.error_type}
                    loggedInStatus={this.state.isLoggedIn}
                    data={this.state.user}/>
                )} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

