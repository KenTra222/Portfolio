import styles from './card.module.scss'


const Card = (props) => {
  return (
    <div>
        <p className='title'>{props.title}</p>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default Card
