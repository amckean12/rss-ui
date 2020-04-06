//Libraries
import React from 'react';

// Style
import '../styles/components/form.scss'

const FormComponent = (props) => {
    return(
        <section className="form-section">
            <form className="form" onSubmit={props.handleSubmit}>
                <div class="form-group form__input-group">
                    <label className="form__label">Username</label>
                     <input id="usernameInput" type="text" class="form-control form__input" placeholder="Username" name="username" onChange={props.handleChange}/>
                </div>
                <div class="form-group form__input-group">
                     <label className="form__label">Password</label>
                     <input id="passwordInput" type="password" class="form-control form__input" placeholder="Password" name="password" onChange={props.handleChange}/>
                </div>
                {props.formType == 'Sign Up' ? 
                <div class="form-group form__input-group">
                    <label className="form__label">Password Confirmation</label>
                    <input id="passwordInputConfirmation" type="password" class="form-control form__input" placeholder="Password" name="password_confirmation" onChange={props.handleChange}/>
                </div> : ""
                }
                <button type="submit" class="form__submit-button--primary">{props.formType}</button>
            </form>
        </section>
    )
}


export default FormComponent