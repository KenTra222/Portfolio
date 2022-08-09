import styles from './card.module.scss'


const Card = (props) => {
  return (
    <div className='card'>
        <img className='card_img' src='' alt=''/>
        <p className='title'>{props.title}</p>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default Card
