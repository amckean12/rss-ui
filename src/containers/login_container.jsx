// Libraries
import React, { Component } from 'react';
import axios from 'axios';

// Components
import FormComponent from '../components/form_component.jsx'

// StyleSheets
import '../styles/components/login.scss'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form_type: "Login",
            form_route: "New User?",
            username: '',
            password: '',
            password_confirmation: ''
        };
    }

    renderFormType = () => {
        let form_type = ""
        let form_route = ""
        if (this.state.form_type === "Login") {
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if(this.state.form_type === "Login"){
            this.handleLogin()
        } else {
            this.handleSignup()
        }
    }

    handleLogin = () => {
        axios.get('http://localhost:3001/find_user', {
            params: {
                password: this.state.password,
                username: this.state.username
            }
        })
        .then(response => {
            this.props.handleLogin(response.data)
            localStorage.setItem('username', response.data.user_data.username);
            this.handleRedirect()
        })
    }

    handleSignup(){
        axios.post('http://localhost:3001/new_user', {
            user: {
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                username: this.state.username
            }
        })
        .then(function(response){
            
        })
    }

    handleRedirect(){
        this.props.history.push('/profile')
    }

    render(){
        return(
            <section className="container-fluid login">
                <div className="row h-100">
                    <div className="col-md-6 col-sm-12 login__main-heading-container">
                        <div className="mx-auto login__heading-wrapper">
                            <h1 className="login__heading-1">RSS Application Login Page</h1>
                            <h2 className="login__heading-2">Login or register from here to access.</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 login__main-form-container">
                        <div className="login__form-wrapper">
                            <FormComponent
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                formType={this.state.form_type} 
                            />
                            <div className="text-center login__form-toggle">
                                <button class="btn btn-link" onClick={this.renderFormType}>{this.state.form_route}</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginContainer