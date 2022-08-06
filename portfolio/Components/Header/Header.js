import React from 'react'
import Link from 'next/link'
//styles for the Header
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='/Logo2-removebg.png' alt='' className={styles.Logo}/>
      <nav className={styles.navbar}>
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