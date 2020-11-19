import React from 'react';
import styles from './index.module.css'
import Link from '../link'

const Trek = ({src, trekId}) => {


    return (
            <Link href={`/details/${trekId}`} className={`card ${styles['overflow-hidden']} ${styles.treksPlaceholder} ${styles['trek-details']}`}>
                <div className='card-body'>
                    <p className= {styles.cardText}></p>
                </div>
                <img className={`${styles.cardImage} ${styles.cardImg}`} src={src} alt='Card cap'/>
             </Link> 
    )
}

export default Trek