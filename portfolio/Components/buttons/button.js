import Link from 'next/link'
import styles from './button.module.scss'

function Button(props){
    return(
        <div className={styles.btnContainter}>
            <Link href={props.link}>
            <button className={styles.btn}>{props.text}</button>
            </Link> 
        </div>
    )
}

export default Button