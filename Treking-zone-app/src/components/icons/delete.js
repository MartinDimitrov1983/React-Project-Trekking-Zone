import React from "react"
import d from "./dAttribute"

const DeleteIcon = () => {

    return (
        <svg version="1.1" width="30px" id="remove-button" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 507.2 507.2"
            style={{ enableBackground: "new 0 0 507.2 507.2" }} xmlSpace="preserve">
            <circle style={{ fill: "rgb(248, 184, 8)" }} cx="253.6" cy="253.6" r="253.6" />
            <path style={{ fill: "rgb(248, 184, 8)" }} d={d.d9} />
            <path style={{ fill: "#FFFFFF" }} d={d.d4} />
            <path style={{ fill: "#D6D6D6" }} d={d.d5} />
            <path style={{ fill: "#FFFFFF" }} d={d.d6} />
        </svg>
    )
}

export default DeleteIcon