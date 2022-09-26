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
          <a className={styles.link} href='#home'>Home</a> 
        </li>
        <li className={styles.navitem}>
          <a className={styles.link} href='#about'>About</a> 
        </li>
        
        <li className={styles.navitem}>      
          <a className={styles.link} href='#projects' >Projects</a> 
        </li>

        <li className={styles.navitem}>         
          <a className={styles.link} href='#contact'>Contact</a>           
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