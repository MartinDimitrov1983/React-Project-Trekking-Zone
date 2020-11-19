import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import Link from '../link'
import { getNavigation } from '../../utils'
import UserContext from '../../Context'
import { HomeMountainIcon } from '../icons'

const Header = () => {
    const context = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        document.body.classList.add(styles.back)
    })

    const logOut = () => {
        context.logOut()
        history.push('/');
    }

    const links = getNavigation(context.user)

    return (
        <nav className={`${styles.siteHeader} sticky-top py-1`}>
            <div className={`${styles.container} d-flex flex-column flex-md-row
             justify-content-between ${styles.flexEqual} ${styles['@media']}`} >
                <Link className='py-2' href='/'>
                    <HomeMountainIcon />
                </Link>
                {
                    links.map(navElement => {
                        return (
                            <Link
                                key={navElement.title}
                                title={navElement.title}
                                href={navElement.title === 'Logout' ? '' : navElement.link}
                                className='py-2 d-none d-md-inline-block'
                                onClick={navElement.title === 'Logout' && logOut}
                            />
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Header