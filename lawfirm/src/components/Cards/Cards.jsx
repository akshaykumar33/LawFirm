import React from 'react'
import styles from './Cards.module.css';
import gift from '../../assets/images/icon.png'
function Cards() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Why Choose us?</div>
        <div className={styles.cards}>
        <div className={styles.content} style={{background:'var(--color-primary)',opacity:'0.6'}}>
            <img src={gift} alt='gitIcon' className={styles.image}/>
            <div className={styles.first}>98% Success Rate</div>
            <div className={styles.second}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</div>
            <button className={styles.button}>Read More</button>
        </div>
        <div className={styles.content} style={{background:'rgba(53, 52, 52, 0.5)'}}>
            <img src={gift} alt='gitIcon' className={styles.image}/>
            <div className={styles.first}>98% Success Rate</div>
            <div className={styles.second}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</div>
            <button className={styles.button}>Read More</button>
        </div>
        <div className={styles.content} style={{background:'var(--color-primary)',opacity:'0.6'}}>
            <img src={gift} alt='gitIcon' className={styles.image}/>
            <div className={styles.first}>98% Success Rate</div>
            <div className={styles.second}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</div>
            <button className={styles.button}>Read More</button>
        </div>
        </div>
    </div>
  )
}

export default Cards