//Libraries
import React from 'react';

const ErrorComponent = (props) => {
    return(
        <section className="error-section">
            <h1 className="error-section__heading">{props.errorState}</h1>
        </section>
    )
}


export default ErrorComponent