import React, { Component } from 'react';

//Container
import ProfileContainer from './profile_container.jsx'


class MainContainer extends Component {
    render(){
        return(
            <main className="main container">
                <ProfileContainer />
            </main>
        );
    }
}

export default MainContainer