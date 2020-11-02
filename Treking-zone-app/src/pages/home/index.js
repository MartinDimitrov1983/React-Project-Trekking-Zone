import React, { useContext, useState, useEffect } from "react"
import PageLayout from "../../components/page-layout"
import LoggedOut from "../../components/loggedOut"
import WithTreks from "../../components/withTreks"
import WithoutTreks from "../../components/withoutTreks"
import UserContext from "../../Context"

const HomePage = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user && context.user.loggedIn
    const [treks, setTreks] = useState([])
    
    const allTreks = async () => {
        const promise = await fetch('http://localhost:9999/api/trek');
        const treks = await promise.json();
        setTreks(treks)
    }

    useEffect(() => {
        allTreks()
    })


    return (
        <PageLayout>
            {!loggedIn && <LoggedOut />}
            {loggedIn && treks.length === 0 && <WithoutTreks/>}
            {loggedIn && treks.length > 0 && <WithTreks treks={treks}/>}
        </PageLayout>
    )
}

export default HomePage;