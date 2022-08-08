//component import
import BioDetails from "../Components/Bio/bio"
import Button from "../Components/buttons/button"
import Carousel from "../Components/Carousel/carousel"
import Header from "../Components/Header/Header"
import ProjectBtn from "../Components/ProjectBtn"
import Card from "../Components/Card/card"

//link import
import Link from 'next/link'

//stylesheet
import styles from '../styles/Homepage.module.scss'
import ContactForm from "../Components/ContactForm/ContactForm"

function Homepage() {
    return(

        <div>
            <Header/>
            <div className={styles.homepageLayout}>

           <section className={styles.heroSection}>
            
        
            <h1 className={styles.heroTitle}>Kentravious V. Colson</h1>
            <div className={styles.heroDetails}>
            <h3 className={styles.heroRole}>Web Designer x Frontend Dev</h3>
            <p className={styles.heroTagline}>Conceptualizing creative designs for small and local businesses</p>
            </div>
           </section>
            <BioDetails/>
            <Button link='/about' text='see resume'/>   

            </div>

            <section>
            <h2>What I Offer</h2>
             <Carousel service='design' description='design'/>
             <Carousel service='development' description='development'/>
             <Carousel service='design' description='design'/>
            </section>

            <section>
                <h2>Projects I've done</h2>
                <ProjectBtn/>
                <Card title='card' description='description'/>
            </section>

            <section>
                <h2>get in contact</h2>
                <ContactForm/>
            </section>

         </div>
        )
}

export default Homepage