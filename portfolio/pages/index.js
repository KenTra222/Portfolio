import React from "react"

//link for routing
import Link from 'next/link'

//stylesheet for application
import styles from '../styles/LandingPage.module.scss'

// markup for the landing page
function LandingPage(){
  return(

    <div className={styles.landingPageContainer}>

    <h1 className={styles.title}>Kentravious  
    V.
     Colson</h1>
    <h3 className={styles.careerRole}>Web Designer <br/> Frontend developer</h3>
    <div className={styles.btnContainter}>
  
  {/*links for navigation*/}
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
