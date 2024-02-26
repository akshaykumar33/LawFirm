import React from 'react'
import styles from './teams.module.css';
import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';
import team3 from '../../assets/images/team3.png';
import team4 from '../../assets/images/team4.png';
import team5 from '../../assets/images/team5.png';
import team6 from '../../assets/images/team6.png';

function Teams() {
  return (
    <div className={styles.container}>
    <div className={styles.teamHeading}>
    Our Team
    </div>
    <div className={styles.cardSet}>
<div className={styles.card}>
<img src={team1} alt="team1" className={styles.image}/>
<div className={styles.intro}>
    <div className={styles.name}>Danial Def</div>
    <div className={styles.subHeader}>301 Cases</div>
</div>
</div>
<div className={`${styles.card} ${styles.padColor}`}>
<img src={team2} alt="team2" className={`${styles.image}` }/>
<div className={styles.intro}>
    <div className={styles.name}>Sanfole</div>
    <div className={styles.subHeader}>850 Cases</div>
</div>
</div>
<div className={styles.card}>
<img src={team3} alt="team3" className={styles.image} />
<div className={styles.intro}>
    <div className={styles.name}>Cesforila</div>
    <div className={styles.subHeader}>470 Cases</div>
</div>
</div>
<div className={styles.card}>
<img src={team4} alt="team4" className={styles.image}/>
<div className={styles.intro}>
    <div className={styles.name}>Colleen</div>
    <div className={styles.subHeader}>180 Cases</div>
</div>
</div>
<div className={styles.card}>
<img src={team5} alt="team5" className={styles.image}/>
<div className={styles.intro}>
    <div className={styles.name}>Haldone</div>
    <div className={styles.subHeader}>212 Cases</div>
</div>
</div>
<div className={styles.card}>
<img src={team6} alt="team6" className={styles.image}/>
<div className={styles.intro}>
    <div className={styles.name}>Nik Jeo</div>
    <div className={styles.subHeader}>350 Cases</div>
</div>
</div>

    </div>
    </div>
  )
}

export default Teams