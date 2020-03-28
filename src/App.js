import React from 'react';

//Containers
import HeaderContainer from './containers/header_container.jsx'
import MainContainer from './containers/main_container.jsx'
import FooterContainer from './containers/footer_container.jsx'


//Style Sheets
import './app.scss'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
