import styles from './Bio.module.scss'

function BioDetails(){
    return(
        <div className={styles.bioSection}>
            <h2 className={styles.bioHeading}>About Myself</h2>
            <img className={styles.bioImage} src='/sp-seriouspose1.jpg' alt='headshot'/>
            <p>
            <span>Kentravious Colson </span> 
             is a man of many talents but his best is his ability to learn and adapt to new challenges and gaining new experiences along the way.
                with his education from Scrimba and Youtube university he dedicated to put his best foot forward into creating webpages and content for small local businesses using design tools, CMS(content management system) and software languages.           
                Coming from the auto and distribution world he decided to take his journey to a more digital route.
                </p>
           
        </div>
    )
}

export default BioDetails