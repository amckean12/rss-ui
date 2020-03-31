import React, { Component } from 'react';

//Container
import LoginContainer from './login_container.jsx'

//Components


class MainContainer extends Component {
    render(){
        return(
            <main className="main">
                <LoginContainer />
            </main>
        );
    }
}

export default MainContainer