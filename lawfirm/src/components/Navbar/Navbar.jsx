import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';


function Navbar() {
  return (
   <nav className={styles.container}>
    <Logo/>
    <div className={styles.tab}>
      <div className={styles.subTabs}>Home</div>
      <div className={styles.subTabs}>Practice Areas</div>
      <div className={styles.subTabs}>Attorneys</div>
      <div className={styles.subTabs}>About Us</div>
    </div>
    <div className={styles.button}>
    <div className={styles.buttonName}>Contact Now</div>
    </div>
   </nav>
  )
}

export default Navbar