import React from "react";
import FaLeft from "react-icons/lib/fa/angle-left";
import FaRight from "react-icons/lib/fa/angle-right";
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";

const Icon = (props) => {
    const faIcon = () => {
        switch(props.icon) {
            case "left":
                return <FaLeft />;
            case "right":
                return <FaRight />;
            case "twitter":
                return <FaTwitter />;
            case "facebook":
                return <FaFacebook />;
        }
    }
    
    return (
        <div className="icon" onClick={props.onClick}>
            {faIcon()}
            
            {/* 
            icon name - component
            div should have onclick method
            */}
        </div>
    );
}

export default Icon;