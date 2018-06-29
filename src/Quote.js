import React from "react";

const Quote = (props) => {
    return (
        <div id={props.id}>
            <div id="text">{props.text}</div>
            <div id="author">― {props.author}</div>
        </div>
    );
}

export default Quote;