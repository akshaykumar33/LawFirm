import React from 'react'
import logo from '../../assets/images/logo.png';
import styles from './Logo.module.css';

function Logo() {
  return (

    <img src={logo} alt='logo' className={styles.brand} width={1} height={1}/>

  )
}

export default Logo