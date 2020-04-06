// Libraries
import React, { Component } from 'react';

// Containers
import MainContainer from './containers/main_container.jsx'


// Style Sheets
import './app.scss'
import './styles/utils/responsiveness.scss'

class App extends Component {
  render(){
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
