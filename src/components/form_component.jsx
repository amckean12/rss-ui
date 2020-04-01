//Libraries
import React from 'react';

const FormComponent = (props) => {
    return(
        <section className="form-section">
            <form className="form">
                <div class="form-group">
                    <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name" />
                </div>
                <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-black">Login</button>
                <button type="submit" class="btn btn-secondary">Register</button>
            </form>
        </section>
    )
}


export default FormComponent