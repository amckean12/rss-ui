import React, { Component } from 'react';

//Container
import LoginContainer from './login_container.jsx'

class MainContainer extends Component {
    render(){
        return(
            <main className="main container-fluid">
                <LoginContainer />
            </main>
        );
    }
}

export default MainContainer