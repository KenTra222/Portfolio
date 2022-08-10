import {useState} from 'react'
import Link from 'next/link'
//styles for the Header
import styles from './Header.module.scss'


import { Twirl as Hamburger } from 'hamburger-react'

const Header = () => {
  
  const [isOpen, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <Link href='/homePage'>
      <img src='/Logo2-removebg.png' alt='' className={styles.Logo}/>
      </Link>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <Hamburger
      className={styles.Hamburger}
      color="#E507AC"
      size={20}
      onToggle={toggled => {
        if (toggled) {
           
        } else {
           // close a menu
        }
      }}/>

      {/*<ul className={styles.menu}>
        <Link href='/homePage' >
         <a className={styles.link}>Home</a> 
        </Link>
        <Link href='/about'>
        <a className={styles.link}>About</a> 
        </Link>
        <Link href='/projects'>
        <a className={styles.link}>Projects</a> 
        </Link>
        <Link href='/contact'>
        <a className={styles.link}>Contact</a> 
        </Link>
     </ul>*/}
    </header>
  )
}

export default Header