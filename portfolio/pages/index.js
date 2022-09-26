//component import
import BioDetails from "../Components/Bio/bio"
import Button from "../Components/buttons/button"
import Carousel from "../Components/Carousel/carousel"
import Header from "../Components/Header/Header"


import ContactForm from "../Components/ContactForm/ContactForm"



//stylesheet
import styles from '../styles/Homepage.module.scss'

function Homepage() {
    return(

        <div >
            <Header/>
            <div  className={styles.homepageLayout}>
           
           
             {/*hero section*/}
           <section id="home"  className={styles.heroSection}>
            
        
            <h1 className={styles.heroTitle}>Kentravious V.  Colson<hr/></h1>
            <div className={styles.heroDetails}>
            <h3 className={styles.heroRole}>Web Designer x Frontend Dev</h3>
           
            <p className={styles.heroTagline}>Conceptualizing creative designs for small and local businesses by researching, planning, designing and building with hands on </p>
            </div>
           </section>

           <section id="about">
            <BioDetails/>

           </section>
             
            

            </div>
            {/*project section*/}
            <section id="projects" className={styles.projectSection}>
            <hr/>
            <h2 className={styles.projectTitle}>My Work</h2>
             <Carousel/>

             <div class={styles.projectContainer}>
                    
                <div class={styles.Item1}>
                    <div>
                
                        <div>
                        <h3>Gigibite</h3>
                        <p>description</p>
                        </div>
                    </div>
                </div>
                 
                
                <div class={styles.Item2}>Item1</div>
                

                
                <div class={styles.Item3}>Item1</div>
                

                
                <div class={styles.Item4}>Item1</div>
                
                
                <div class={styles.Item5}>Item1</div>                
                
                
                <div class={styles.Item6}>Item1</div>
                
                
                
            </div>
            </section>
            
    
                
          

            {/*contact section*/}
            <section id="contact" className={styles.contactSection}>
                <hr/>
                <h2  className={styles.contactTitle}> Contact Me</h2>
                <ContactForm />

                <img src="../img/sp-staringoff1.jpg"/>
            </section>

         </div>
        )
}

export default Homepage