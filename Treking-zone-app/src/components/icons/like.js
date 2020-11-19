import React from "react"
import d from "./dAttribute"

const LikeIcon = () => {

    return (
        <svg version="1.1" width="30px" id="like-button" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50"
            style={{ enableBackground: "new 0 0 50 50" }} xmlSpace="preserve">
            <path style={{ fill: "rgb(248, 184, 8)" }} d={d.d7} />
            <path style={{ fill: "rgb(241, 212, 131)" }} d={d.d8} />
        </svg>
    )
}

export default LikeIcon