import React, { useContext, useState, useEffect } from 'react'
import PageLayout from '../../page-layout'
import LogOut from '../../components/logOut'
import TrekList from '../../components/trekList'
import NoTreks from '../../components/noTreks'
import UserContext from '../../Context'
import {config } from '../../utils'

const HomePage = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user && context.user.loggedIn
    const [treks, setTreks] = useState([])
    
    const allTreks = async () => {
        const promise = await fetch(config.trekURL);
        const treks = await promise.json();
        setTreks(treks)
    }

    useEffect(() => {
        allTreks()
    })


    return (
        <PageLayout>
            {!loggedIn && <LogOut />}
            {loggedIn && treks.length === 0 && <NoTreks/>}
            {loggedIn && treks.length > 0 && <TrekList treks={treks}/>}
        </PageLayout>
    )
}

export default HomePage