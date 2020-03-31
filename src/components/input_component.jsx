//Libraries
import React from 'react';

const InputComponent = (props) => {
    return(
        <div className={`${props.block}__inner`}>
            <h1 className={`${props.block}__${props.element}`}>{props.content}</h1> 
        </div>
    )
}


export default InputComponent