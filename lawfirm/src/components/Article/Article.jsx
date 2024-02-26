import React from 'react'
import styles from './Article.module.css'
function Article() {
  return (
    <div className={styles.container}>
    <div className={styles.leftSection} >
    Let’s Introduce Ourself
    </div>
    <div class={styles.line}></div>
    <div className={styles.rightSection}>
    <div className={styles.rightSectionTop}>
    Criminal Lawyer
    </div>
    <div className={styles.rightSectionBottom}>
    Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.
    </div>
    </div>
    </div>
  )
}

export default Article