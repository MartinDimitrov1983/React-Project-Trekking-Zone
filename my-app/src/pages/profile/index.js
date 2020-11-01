import React, { useContext, useEffect } from "react"
import styles from "./index.module.css"
import UserContext from "../../Context"
import PageLayout from "../../components/page-layout"
import image from "../../images/user.png"

const ProfilePage = () => {

    const context = useContext(UserContext)
    const isCreateTrek =  context.user.treks && context.user.treks.length !== 0;
    const trekNames = context.user.treks && context.user.treks.map((x,i) => <p key = {i}>{x}</p>);

    return (
        <PageLayout>
            <div className={`${styles.profile} col-md-6 text-center col-lg`}>
                <img className={styles["profile-img"]} src={image} />
                <div className={styles["profile-info"]}>
                    <p>Username: <small>{context.user.username}</small></p>
                    {isCreateTrek && (<p className={styles.infoType}>Wished {context.user.treks.length} treks =) </p>)} 
                    {isCreateTrek && (trekNames)}
                    {!isCreateTrek &&(<p>No treks</p>)}

                           
                </div>
            </div>
        </PageLayout>
    )

}

export default ProfilePage;