
import BioDetails from "../Components/Bio/bio"
import styles from '../Components/buttons/button.module.scss'
import Header from "../Components/Header/Header"
import Link from 'next/link'

function About() {
    return(
        <div>
            <Header/>
           <h1>
            </h1> 
           
            <BioDetails/>
            <h2>Resume</h2>
            
            <Link href='/projects'>
            <button className={styles.btn}>see resume</button>
            </Link> 
        </div>
    )
}

export default About