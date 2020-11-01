import React from "react";
import styles from "./index.module.css"
import empty from "../../images/empty.jpg"


const Home = () => {


    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.fouronefour}>
                        <img className={styles["no-found-picture"]} src={empty} alt = ""/>
                    </div>
                    <div className={styles["no-found-template"]}>
                        <h1>
                            There aren't any treks, yet!</h1>
                        <h2>
                            What do you have in mind?</h2>
                        <div className="no-found-details">
                            Be the first explorer!
                            </div>
                        <div className="actions">
                            <a href="/create" className={`${styles.btn} btn-dark btn-lg `}>Create the first trek? </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;