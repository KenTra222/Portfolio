import React from "react"

//link for routing
import Link from 'next/link'

//stylesheet for application
import styles from '../styles/Home.module.scss'

// markup for the landing page
function LandingPage(){
  return(

    <div className={styles.landingPageContainer}>
    <h1 className={styles.title}>Kentravious V. Colson</h1>
    <span id="jobTitle"><h3>Creative Artist x Web Deisigner</h3></span>
    <div className={styles.btnContainter}>
  <Link href='./contact'>
  <button className={styles.btn}>contact</button>
  </Link> 
  <Link href='./homePage'>
    <button  className={styles.btn}>homepage</button>
  </Link> 
    </div>
  </div>
    )
}

export default LandingPage
