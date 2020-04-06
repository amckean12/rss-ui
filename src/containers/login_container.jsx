import React, { Component } from 'react';

//Components
import FormComponent from '../components/form_component.jsx'

// StyleSheets
import '../styles/components/login.scss'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form_type: "Login",
            form_route: "New User?"
        };
        this.renderFormType = this.renderFormType.bind(this)
    }

    renderFormType(){
        let form_type = ""
        let form_route = ""
        if(this.state.form_type === "Login"){
            form_type = "Sign Up"
            form_route = "Login"
        } else {
            form_type = "Login"
            form_route = "New User?"
        }
        this.setState({
            form_type: form_type,
            form_route: form_route
        })
    }
    render(){
        return(
            <section className="login row">
                <div className="col-md-6 col-sm-12 login__main-heading-container">
                    <div className="mx-auto login__main-heading">
                        <h1 className="login__heading-1">RSS Application Login Page</h1>
                        <h2 className="login__heading-2">Login or register from here to access.</h2>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 login__main-form-container">
                    <FormComponent
                        formType={this.state.form_type} 
                    />
                    <button class="btn btn-link" onClick={this.renderFormType}>{this.state.form_route}</button> 
                </div>
            </section>
        );
    }
}

export default LoginContainer