import styles from './card.module.scss'
import Image from 'next/image'

import logo2 from '/public/Logo2.png'


const Card = (props) => {
  return (
    <div className={styles.card}>
        <Image 
      src={logo2} alt='/'/>
       
        <div className={styles.cardDetails}>
          <p className={styles.card_title}>{props.title}</p>
          <p className={styles.card_description}>{props.description}</p>
        </div>
    </div>
  )
}

export default Card
