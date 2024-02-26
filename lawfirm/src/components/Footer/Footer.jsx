import React from 'react';
import styles from './Footer.module.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className={styles.container}>
    
   <div className={styles.footHeader}>
    <Logo/>
    <div className={styles.tab}>
      <div className={styles.subTabs}>Home</div>
      <div className={styles.subTabs}>Practice Areas</div>
      <div className={styles.subTabs}>Attorneys</div>
      <div className={styles.subTabs}>About Us</div>
    </div>
    <div className={styles.icons}>
    <InstagramIcon style={{fontSize:'2em',color:'var(--color-secondary',padding:1}}/>
    <FacebookIcon style={{fontSize:'2em',color:'var(--color-secondary',padding:1}}/>
    <TwitterIcon style={{fontSize:'2em',color:'var(--color-secondary',padding:1}}/>
    <PinterestIcon style={{fontSize:'2em',color:'var(--color-secondary',padding:1}}/>
    </div>
   </div>
 <div className={styles.foot}>
<div className={styles.subFoot}>© 2020 Acme. All right reserved.</div>
<div className={styles.subFoot}>Privacy Policy</div>
<div className={styles.subFoot}>Terms of Service</div>
</div> 
 </div>  
  )
}

export default Footer