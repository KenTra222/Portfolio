import React from "react"
import styles from '../styles/Home.module.scss'

// markup for the landing page
function LandingPage(){
  return(

    <div className={styles.landingPageContainer}>
    <h1 className={styles.title}>Kentravious V. Colson</h1>
    <span id="jobTitle"><h3>Creative Artist x Web Deisigner</h3></span>
    <div className={styles.btnContainter}>
    <button className={styles.btn}>contact</button>
    <button  className={styles.btn}>homepage</button>
    </div>
  </div>
    )
}

export default LandingPage
