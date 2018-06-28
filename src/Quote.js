import React from "react";

const Quote = (props) => {
    return (
        <div id="quote">
            <div id="text">{props.text}</div>
            <div id="author">{props.author}</div>
        </div>
    );
}

export default Quote;