import React, { Component } from 'react';

//Components
import FormComponent from '../components/form_component.jsx'

class LoginContainer extends Component {
    render(){
        return(
            <section className="login">
                <FormComponent />
            </section>
        );
    }
}

export default LoginContainer