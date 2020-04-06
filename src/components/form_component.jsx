//Libraries
import React from 'react';

const FormComponent = (props) => {
    return(
        <section className="mx-auto form-section">
            <form className="form" onSubmit={props.handleSubmit}>
                <div class="form-group form__input-group">
                    <label>Email</label>
                     <input id="emailInput" type="text" class="form-control" placeholder="Email" name="email"/>
                </div>
                <div class="form-group form__input-group">
                     <label>Password</label>
                     <input id="passwordInput" type="password" class="form-control" placeholder="Password" name="password"/>
                </div>
                <button type="submit" class="btn form__button--primary">{props.formType}</button>
            </form>
        </section>
    )
}


export default FormComponent