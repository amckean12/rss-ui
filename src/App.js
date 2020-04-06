// Libraries
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Containers
import LoginContainer from './containers/login_container.jsx';
import MainContainer from './containers/main_container.jsx';


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
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

