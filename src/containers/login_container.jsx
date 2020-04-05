import React, { Component } from 'react';

//Components
import FormComponent from '../components/form_component.jsx'

// StyleSheets
import '../styles/components/login.scss'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
          });
    }

    sendRequest(){

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
                        handleChange={this.handleChange}
                    />
                </div>
            </section>
        );
    }
}

export default LoginContainer