import {useState} from 'react'
import Link from 'next/link'
//styles for the Header
import styles from './Header.module.scss'

const Header = () => {
  //hambburger logic
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  //toggles menu
  const updateMenu = () => {
      if(isMenuClicked){
        setBurgerClass('burger_bar clicked')
        setMenuClass('menu visible')
      } 
      else {
        setBurgerClass('burger_bar hidden')
        setMenuClass('menu hidden')
      }
  }

  return (
    <header className={styles.header}>
      <Link href='/homePage'>
      <img src='/Logo2-removebg.png' alt='' className={styles.Logo}/>
      </Link>
      
      <div className='burger_menu'>
        <div className={'burger_class'}></div>
        <div className={'burger_class'}></div>
        <div className={'burger_class'}></div>
      </div>

      <nav className={styles.menu }>
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
     </nav>
    </header>
  )
}

export default Header