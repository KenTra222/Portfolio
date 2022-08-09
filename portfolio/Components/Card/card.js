import styles from './card.module.scss'


const Card = (props) => {
  return (
    <div className='card'>
        <img className='card_img' src='/sp-smiling2.jpg' alt='project pic'/>
        <div className={styles.cardDetails}>
          <p className={styles.card_title}>{props.title}</p>
          <p className={styles.card_description}>{props.description}</p>
        </div>
    </div>
  )
}

export default Card
