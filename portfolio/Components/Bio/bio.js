import styles from './Bio.module.scss'
import Button from '../buttons/button'

function BioDetails(){
    return(
    <div className={styles.bio}>
        <h2 className={styles.bioHeading}>About Myself</h2>
        <div className={styles.bioSection}>
            <img className={styles.bioImage} src='/sp-seriouspose1.jpg' alt='headshot'/>
          <div className={styles.bioContainer}>
            <p> 
            Hi! I’m a creative individual with a variety of experience from different backgrounds bringing positive energy and empathy to strengthen relationships with employees and customers. I believes in the power of people to solve problems, and that hard work and perseverance are essential for success.
            </p>
           
                <Button link='/about' text='See Projects'/> 
            
          </div>
          
        </div>
    </div>
    )
}

export default BioDetails