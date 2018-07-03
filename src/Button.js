import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={props.className}>New Quote</button> 
        </div>
    );
}

export default Button;