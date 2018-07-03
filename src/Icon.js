import React from "react";
import FaLeft from "react-icons/lib/fa/angle-left";
import FaRight from "react-icons/lib/fa/angle-right";
import FaTwitter from "react-icons/lib/fa/twitter";

const Icon = (props) => {
    const faIcon = () => {
        switch(props.icon) {
            case "left":
                return <FaLeft />;
            case "right":
                return <FaRight />;
            case "twitter":
                return <FaTwitter />;
        }
    }
    
    const href = () => {
      if (props.icon === "twitter") {
        let query = "?text=" + encodeURIComponent(props.text + " -" + props.author);
        return props.href + query;
      }
    }

    return (
        <a className={props.className} onClick={props.onClick} href={href()} target={props.target}>
            {faIcon()}
        </a>
    );
}

export default Icon;