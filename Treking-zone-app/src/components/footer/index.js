import React from 'react'
import styles from './index.module.css'
import { MountainIcon } from '../icons'

const Footer = () => {


    return (
        <footer className={`${styles.container} py-5 page-footer`}>
            <div className='row text-center'>
                <MountainIcon />
                <p className={`${styles.footer} d-block mb-3`}>© The Trekking Zone - 2019. We can make your dreams come true!</p>
            </div>
        </footer>
    )
}

export default Footer