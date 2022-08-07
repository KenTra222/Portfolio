import BioDetails from "../Components/Bio/bio"
import Carousel from "../Components/Carousel/carousel"
import Header from "../Components/Header/Header"

//stylesheet
import styles from '../styles/Homepage.module.scss'

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
            <button id='btn'>see resume</button>    

            </div>

            <section>
            <h2>What I Offer</h2>
            <Carousel/>
            </section>

            <section>
                <h2>Projects I've done</h2>
            </section>


         </div>
        )
}

export default Homepage