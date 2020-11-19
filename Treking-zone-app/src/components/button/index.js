import React from 'react'
import styles from './index.module.css'

const Button = ({ title, onClick }) => {

    return (

        <button className={`${styles.btn} btn-lg btn-dark btn-block`} type='submit' > {title} </button>
    )
}

export default Button