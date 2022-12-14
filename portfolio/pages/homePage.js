//component import
import BioDetails from "../Components/Bio/bio"
import Button from "../Components/buttons/button"
import Carousel from "../Components/Carousel/carousel"
import Header from "../Components/Header/Header"


import ContactForm from "../Components/ContactForm/ContactForm"

//link import
import Link from 'next/link'

//stylesheet
import styles from '../styles/Homepage.module.scss'

function Homepage() {
    return(

        <div>
            <Header/>
            <div className={styles.homepageLayout}>
           
           
             {/*hero section*/}
           <section className={styles.heroSection}>
            
        
            <h1 className={styles.heroTitle}>Kentravious V.  Colson<hr/></h1>
            <div className={styles.heroDetails}>
            <h3 className={styles.heroRole}>Web Designer x Frontend Dev</h3>
           
            <p className={styles.heroTagline}>Conceptualizing creative designs for small and local businesses by researching, planning, designing and building with hands on </p>
            </div>
           </section>
            <BioDetails/>
             
            

            </div>
            {/*services section*/}
            <section className={styles.serviceSection}>
            <h2 className={styles.serviceTitle}>My Work</h2>
            <hr/>
             <Carousel/>
            </section>
            
    
                
          

            {/*contact section*/}
            <section className={styles.contactSection}>
                <h2  className={styles.contactTitle}> Contact Me</h2>
                <hr/>
                <ContactForm/>
            </section>

         </div>
        )
}

export default Homepage