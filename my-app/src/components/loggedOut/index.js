import React from "react";
import styles from "./index.module.css"
import href from "../../images/mountainLogo.png"

const Home = () => {


    return (
        
        <div className={`${styles.home} d-md-flex flex-md-equal  my-md-3 pl-md-3`} >
            <div style={{paddingLeft: "7%" , paddingTop:"3%"}} className="col-md-7">
                <h2 className="featurette-heading">Here you will find the treks you've <span className={styles.textHighlighted}>always dreamed
          about!</span></h2>
                <p className="lead">1. Join our family.</p>
                <p style={{paddingLeft:"5%"}} className="lead">2. Request the trek you've always wanted.</p>
                <p style={{paddingLeft:"10%"}} className="lead">3. Find people who like your idea.</p>
                <p className="lead">If you find enough supporters, we will organize everything for you!</p>
            </div>
            <div className="col-md-5">
                <img className={styles.homePicture} src={href} alt="Your profile pic"/>
            </div>
        </div>

    )
}

export default Home;