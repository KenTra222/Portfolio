import {useState} from 'react'
import Link from 'next/link'
//styles for the Header
import styles from './Header.module.scss'

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => (console.log('open menu'))

  return (
    <header className={styles.header}>

      <nav className={styles.navBar}>

      <Link href='/homePage'>
      <img src='/Logo2-removebg.png' alt='' 
      className={styles.Logo}/>
      </Link> 

      <ul className={
                    isOpen === false ? styles.menu :
                     styles.menu+""+styles.active
                    }>
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