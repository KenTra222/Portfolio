import React from 'react'
import styles from './projectBtn.module.scss'

//icon
import{BsFillBrushFill, BsFillEnvelopeFill, BsBraces, BsCardImage} from "react-icons/bs";


const ProjectBtn = () => {
  return (
    <div className={styles.btnContainer}>
        <button className={styles.btnIcon}>all</button>
        <button className={styles.btnIcon}><BsFillBrushFill/></button>
        <button className={styles.btnIcon}><BsFillEnvelopeFill/></button>
        <button className={styles.btnIcon}><BsBraces/></button>
        <button className={styles.btnIcon}><BsCardImage/></button>
    </div>
  )
}



export default ProjectBtn