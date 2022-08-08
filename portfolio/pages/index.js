import React from "react"

//link for routing
import Link from 'next/link'

//stylesheet for application
import styles from '../styles/LandingPage.module.scss'
import Button from "../Components/buttons/button"

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
  <Button link='/contact' text='contact'/>
  <Button link='/homePage' text='see more'/>
    </div>
  </div>
    )
}

export default LandingPage
