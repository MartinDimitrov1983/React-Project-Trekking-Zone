import React from 'react';
import styles from './index.module.css'
import Trek from '../trek'

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

export default TrekList