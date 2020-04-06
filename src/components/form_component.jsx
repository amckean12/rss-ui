//Libraries
import React from 'react';

const FormComponent = (props) => {
    return(
        <section className="mx-auto form-section">
            <form className="form">
                <div class="form-group form__input-group">
                    <label>Email</label>
                     <input type="text" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group form__input-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password" />
                </div>
                <button type="submit" class="btn form__button--primary">{props.formType}</button>
            </form>
        </section>
    )
}


export default FormComponent