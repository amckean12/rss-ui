import React, { Component } from 'react';
import axios from 'axios';

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
            errors: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
          });
    }
    
    handleSubmit(event){
        event.preventDefault()

        let user = {
            username: this.state.username,
            password: this.state.password,
        }

        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleLogin(response.data)
                    this.redirect()
                } else {
                    this.setState({
                    errors: response.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))
    };

    redirect(){
        console.log("this worked")
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
                <section className="mx-auto form-section" onSubmit={this.handleSubmit}>
                    <form className="form">
                        <div class="form-group form__input-group">
                            <label>User Name</label>
                            <input type="text" 
                                class="form-control" 
                                name="username" 
                                placeholder="User Name" 
                                onChange={this.handleChange} 
                                required />
                        </div>
                        <div class="form-group form__input-group">
                            <label>Password</label>
                            <input type="password" 
                                class="form-control" 
                                name="password" 
                                placeholder="Password" 
                                onChange={this.handleChange} 
                                required />
                        </div>
                        <button type="submit" class="btn form__button--primary">Login</button>
                        <button type="submit" class="btn form__button--secondary">Register</button>
                    </form>
                </section>
                </div>
            </section>
        );
    }
}

export default LoginContainer