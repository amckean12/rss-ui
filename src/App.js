// Libraries
import React from 'react';

// Containers
import HeaderContainer from './containers/header_container.jsx'
import MainContainer from './containers/main_container.jsx'



// Style Sheets
import './app.scss'
import './styles/utils/responsiveness.scss'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer />
    </div>
  );
}

export default App;
