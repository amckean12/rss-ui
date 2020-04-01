import React, { Component } from 'react';

//Components
import FormComponent from '../components/form_component.jsx'
import HeadingComponent from '../components/heading_component.jsx'

class LoginContainer extends Component {
    render(){
        return(
            <section className="login">
                <HeadingComponent 
                block={"login"} 
                element={"heading"}
                content={"Login"}
                tag={"h2"} />
                <FormComponent 
                block={"login"} />
            </section>
        );
    }
}

export default LoginContainer