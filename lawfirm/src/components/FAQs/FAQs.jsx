import React from 'react'
import styles from './FAQs.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';

function FAQs() {
  return (
    <div className={styles.container}>
        <div className={styles.faqheader}>
            <div className={styles.faqIntro}>
            FAQ
            </div>
            <div className={styles.subFaqIntro}>
            Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. 
            </div>
        </div>
        <div className={styles.accordian}>
        <Accordion sx={{backgroundColor:'var(--color-primary)'}} defaultExpanded>
        <AccordionSummary
          expandIcon={<AddCircleIcon style={{backgroundColor:'var(--color-secondary)',color:'var(--color-primary)',fontSize:'1.5em',borderRadius:'50%'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={styles.title}>Do I need a personal injury report?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'var(--color-primary)'}}>
          <Typography className={styles.details}>
          Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'var(--color-primary)'}}>
        <AccordionSummary
          expandIcon={<AddCircleIcon style={{backgroundColor:'var(--color-secondary)',color:'var(--color-primary)',fontSize:'1.5em',borderRadius:'50%'}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className={styles.title}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'var(--color-primary)'}}>
          <Typography className={styles.details}>
           Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'var(--color-primary)'}}>
        <AccordionSummary
          expandIcon={<AddCircleIcon style={{backgroundColor:'var(--color-secondary)',color:'var(--color-primary)',fontSize:'1.5em',borderRadius:'50%'}}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className={styles.title}>What should I do right after car accidect</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'var(--color-primary)'}}>
          <Typography className={styles.details}>
           Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'var(--color-primary)'}}>
        <AccordionSummary
          expandIcon={<AddCircleIcon style={{backgroundColor:'var(--color-secondary)',color:'var(--color-primary)',fontSize:'1.5em',borderRadius:'50%'}}/>}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography className={styles.title}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'var(--color-primary)'}}>
          <Typography className={styles.details}>
           Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    </div>
  )
}

export default FAQs