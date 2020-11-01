import React, { useState, useEffect} from "react";
import styles from "./index.module.css"
import src from "./src"
import Trek from "../trek"


const TrekList = ({treks}) => {

    const renderTreks = () => {
        return treks.map(trek => {
            return (<Trek key={trek._id} src={trek.imageUrl} trekId={trek._id}/>)
        })
    }

    return (
        <div className={styles.treksList}>
            {renderTreks()}
        </div>

    )
}

export default TrekList;