import {useState} from 'react'
import Link from 'next/link'
//styles for the Header
import styles from './Header.module.scss'

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)
  return (
    <header className={styles.header}>

      <nav className={styles.navBar}>

      <Link href='/homePage'>
      <img src='/Logo2-removebg.png' alt='' 
      className={styles.Logo}/>
      </Link> 

      <ul className={
                    isOpen === false ? styles.navmenu :
                     styles.navmenu+""+styles.active
                    }>
        <li className={styles.navitem}>
          <Link href='/homePage' >
          <a className={styles.link}>Home</a> 
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link href='/about'>
          <a className={styles.link}>About</a> 
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link href='/projects'>
          <a className={styles.link}>Projects</a> 
          </Link>
        </li>
        <li className={styles.navitem}>  
          <Link href='/contact'>
          <a className={styles.link}>Contact</a> 
          </Link>
        </li>
      </ul>

       
      <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

     
      </nav>
    </header>
  )
}

export default Header