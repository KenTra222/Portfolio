import styles from './serviceCard.module.scss'

function ServiceCard(props){
    return(
        <div className={styles.cardContainer}>
             <h3 className={styles.serviceName}>{props.service}</h3>
            <p className={styles.serviceDescription}>{props.description}</p>
        </div>
    )
}

export default ServiceCard