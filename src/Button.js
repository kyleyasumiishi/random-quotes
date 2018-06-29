import React from 'react';

// add onclick method and handleclick method in props

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={props.className}>New Quote</button> 
        </div>
    );
}

export default Button;