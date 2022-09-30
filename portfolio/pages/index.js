//stylesheet
import styles from '../styles/Homepage.module.scss'

//component import
//local
import BioDetails from "../Components/Bio/bio"
import Carousel from "../Components/Carousel/carousel"
import Header from "../Components/Header/Header"
import Image from 'next/image'
import ContactForm from "../Components/ContactForm/ContactForm"

//external
import {FaFigma, FaHtml5, FaCss3Alt, FaReact, FaWix} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import Typewriter from 'typewriter-effect'


//pictures import
import Pic1 from "../img/smokeybanner.jpg"
import Pic2 from "../img/BITBW.jpg"
import Pic3 from "../img/zuri_1_original.jpg"
import Pic4 from "../img/happydollzrus.jpg"
import Pic5 from "../img/roccstarri.jpg"
import Pic6 from "../img/make a statement.jpg"
import avatar from '../img/avataaars.png'






function Homepage() {
    return(

        <div >
            
            <Header/>
            <div  className={styles.homepageLayout}>
           
           
             {/*hero section*/}
           <section id="home"  className={styles.heroSection}>
            
            <div className={styles.heroContainer}>

            <h1 className={styles.heroTitle}>{`<Kentravious Colson/>`}</h1>
            <div className={styles.heroDetails}>
            <h2 className={styles.heroRole}>  
                <Typewriter
                options={{
                    strings: ['UI Designer','Frontend Developer', 'Creative artist', 'Umm Googler?', 'Smoothie Addict '],
                    autoStart: true,
                    loop: true,
                }}
                />
                </h2>
           
            <p className={styles.heroTagline}>Conceptualizing creative designs for small and local businesses </p>
            </div>
                </div>
           </section>

            <h2 className={styles.skillSet}>My skillset</h2>
            <ul className={styles.iconList}>
                <li className={styles.icon}>
                    <FaFigma/>
                </li>
                
                <li className={styles.icon}>
                    <FaHtml5/>
                </li>
                
                <li className={styles.icon}>
                    <FaCss3Alt/>
                </li>
                
                <li className={styles.icon}>
                    <TbBrandJavascript/>
                </li>
                <li className={styles.icon}>
                    <FaReact/>
                </li>
                
                <li className={styles.icon}>
                    <FaWix/>
                </li>
            </ul>
            

            </div>
            {/*project section*/}
            <section id="projects" className={styles.projectSection}>
            <hr/>
            <h2 className={styles.projectTitle}>My Work</h2>
 
            <h3>Photo Gallery</h3> 
             <div class={styles.projectContainer}>


                  
                <div class={styles.Item1}>
               
                         <Image src={Pic1}
                         layout='fill'
                         objectFit="fill"
                         />  
                        
               
                </div>
                 
                
                <div class={styles.Item2}>
                    
                    <Image src={Pic2}
                        layout='fill'
                        objectFit="fill"/>
                     </div>
                

                
                <div class={styles.Item3}>
                <Image src={Pic3}
                layout='fill'
                objectFit="fill"/></div>
                

                
                <div class={styles.Item4}>
                <Image src={Pic4}
                layout='fill'
                objectFit="fill"/></div>
                
                
                <div class={styles.Item5}>
                <Image src={Pic5}
                layout='fill'
                objectFit="fill"/>
                </div>                
                
                
                <div class={styles.Item6}>
                <Image src={Pic6}
                 layout='responsive'
                 objectFit="fill"/>
                 </div>
                
                
                
            </div>
            </section>
            
    
           <section className={styles.aboutSection} id="about">
            <BioDetails/>

           </section>
                
          

            {/*contact section*/}
            <section id="contact" className={styles.contactSection}>
                <hr/>
                <h2  className={styles.contactTitle}> Contact Me</h2>
                <ContactForm />

               
            </section>

         </div>
        )
}

export default Homepage