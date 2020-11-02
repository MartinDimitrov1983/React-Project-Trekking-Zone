import React from "react" 
import { Link } from "react-router-dom"

const LinkComponent = ({href, className, title, children, onClick}) => {

    return (
        <Link to={href || "/"} className={className || ""} onClick = {onClick}>
                {title}
                {children}
        </Link>
    )

}

export default LinkComponent;
