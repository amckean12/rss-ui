import React, { Component } from 'react';

//Container
import ProfileContainer from './profile_container.jsx';

//Components
import HeaderComponent from '../components/header_component.jsx';

class MainContainer extends Component {
    render(){
        return(
            <div className="container-fluid">
                <HeaderComponent 
                    user={this.props.data.user}
                />
                <ProfileContainer
                    data={this.props.data} 
                />
            </div>
        );
    }
}

export default MainContainer