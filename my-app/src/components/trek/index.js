import React from "react";
import styles from "./index.module.css"

const Trek = ({src, trekId}) => {


    return (
    
            <a href={`/details/${trekId}`} className={`card ${styles["overflow-hidden"]} ${styles.treksPlaceholder} ${styles["trek-details"]}`} style={{width: 20+"rem", height: 18+"rem"}}>
                <div className="card-body">
                    <p className= {styles.cardText}></p>
                </div>
                <img className={`${styles.cardImage} ${styles.cardImg}`} src={src} alt="Card cap"/>
             </a> 
    )
}

export default Trek;