import React from "react";

const Quote = (props) => {
    return (
        <div className={props.className}>
            <div className="text">{props.text}</div>
            <div className="author">― {props.author}</div>
        </div>
    );
}

export default Quote;