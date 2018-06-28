import React from 'react';

// add onclick method and handleclick method in props

const Button = (props) => {
    return (
        <div>
            <button id={props.id}>New Quote</button> 
        </div>
    );
}

export default Button;