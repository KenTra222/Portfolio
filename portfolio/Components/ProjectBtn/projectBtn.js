import React from 'react'
import styles from './projectBtn.module.scss'

//icon
import{BsFillBrushFill, BsFillEnvelopeFill, BsBraces, BsCardImage} from "react-icons/bs";


const projectBtn = () => {
  return (
    <div>
        <button className={styles.btnIcon}>all</button>
        <button><BsFillBrushFill/></button>
        <button><BsFillEnvelopeFill/></button>
        <button><BsBraces/></button>
        <button><BsCardImage/></button>
    </div>
  )
}



export default projectBtn