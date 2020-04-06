//Libraries
import React from 'react';

const FormComponent = (props) => {
    return(
        <section className="mx-auto form-section">
            <form className="form" onSubmit={props.handleSubmit}>
                <div class="form-group form__input-group">
                    <label>Username</label>
                     <input id="usernameInput" type="text" class="form-control" placeholder="Username" name="username" onChange={props.handleChange}/>
                </div>
                <div class="form-group form__input-group">
                     <label>Password</label>
                     <input id="passwordInput" type="password" class="form-control" placeholder="Password" name="password" onChange={props.handleChange}/>
                </div>
                {props.formType == 'Sign Up' ? 
                <div class="form-group form__input-group">
                    <label>Password Confirmation</label>
                    <input id="passwordInputConfirmation" type="password" class="form-control" placeholder="Password" name="password_confirmation" onChange={props.handleChange}/>
                </div> : ""
                }
                <button type="submit" class="btn form__button--primary">{props.formType}</button>
            </form>
        </section>
    )
}


export default FormComponent