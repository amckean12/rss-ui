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
                    <input id="usernameInput" 
                        class="form-control form__input" 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        onChange={props.handleChange} />
                </div>
                <div class="form-group form__input-group">
                    <label className="form__label">Password</label>
                    <input id="passwordInput"
                        class="form-control form__input"  
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        onChange={props.handleChange}/>
                </div>
                {props.formType == 'Sign Up' ? 
                <div class="form-group form__input-group">
                    <label className="form__label">Password Confirmation</label>
                    <input id="passwordInputConfirmation"
                        class="form-control form__input" 
                        type="password"  
                        placeholder="Password" 
                        name="password_confirmation" 
                        onChange={props.handleChange}/>
                </div> : ""
                }
                <button type="submit" class="form__submit-button--primary">{props.formType}</button>
            </form>
        </section>
    )
}


export default FormComponent