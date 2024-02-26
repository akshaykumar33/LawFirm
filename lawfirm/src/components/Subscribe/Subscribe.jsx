import React from 'react'
import styles from './Subscribe.module.css';

function Subscribe() {
  return (
    <div className={styles.container}>
        <div className={styles.subscribeHeader}>
        Subscribe Our Newsletter
        </div>
        <div className={styles.inputBox}>
        <input type="text" className={styles.nameInput} placeholder='Name:'/>
        <input type="text" className={styles.emailInput} placeholder='Enter your Email'/>
        <button className={styles.button} type="submit">Send</button>
        </div>
    </div>
  )
}

export default Subscribe