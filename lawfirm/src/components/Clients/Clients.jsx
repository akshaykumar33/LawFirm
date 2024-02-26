import React from 'react'
import styles from './Clients.module.css';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import client1 from '../../assets/images/avatar1.png';
import client2 from '../../assets/images/avatar2.png'
import client3 from '../../assets/images/avatar3.png'

function Clients() {
  return (
    <div className={styles.container}>
        <div className={styles.clientsHeader}>
        <div className={styles.typography}>
            What says our
         happy Clients
         </div>
         <div className={styles.icons}>
            <ArrowBackTwoToneIcon sx={{backgroundColor:'var(--color-secondary)',fontSize:'1.5em',borderRadius:'50%',width:'1.5em',height:'1.5em'}}/>
            <ArrowForwardTwoToneIcon  sx={{backgroundColor:'var(--color-tertiary)',fontSize:'1.5em',borderRadius:'50%',width:'1.5em',height:'1.5em'}}/>
         </div>
        </div>
        <div className={styles.clients}>
        <div className={styles.content} style={{background:'var(--color-primary)',opacity:'0.6'}}>
            <img src={client1} alt='client1Icon' className={styles.image}/>
            <div className={styles.first}>Jane Cooper</div>
            <div className={styles.subHeading}>Ceo of Hunt</div>
            <div className={styles.second}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</div>
           
        </div>
        <div className={styles.content} style={{background:'rgba(53, 52, 52, 0.5)'}}>
            <img src={client2} alt='client2Icon' className={styles.image}/>
            <div className={styles.first}>Devon Lane</div>
            <div className={styles.subHeading}>Ceo of Hunt</div>
            <div className={styles.second}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</div>
           
        </div>
        <div className={styles.content} style={{background:'var(--color-primary)',opacity:'0.6'}}>
            <img src={client3} alt='client3Icon' className={styles.image}/>
            <div className={styles.first}>Robert Fox</div>
            <div className={styles.subHeading}>Ceo of Hunt</div>
            <div className={styles.second}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</div>
           
        </div>
        </div>
    </div>
  )
}

export default Clients