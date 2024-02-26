import React from 'react';
import styles from './Main.module.css'
import mainImage from '../../assets/images/main.png';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';

function Main() {
  return (
   <main>
    <div className={styles.intro}>
    <div className={styles.upper}>
    You don’t have to 
    Fight them Alone.
    </div>
    <div className={styles.middle}>
    Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
    </div>
    <div className={styles.lower}>
    <OutlinedInput
        id="input-with-icon-textfield"
        sx={{
          width: '300px',
          borderRadius: '999px',
          backgroundColor: 'grey',
          padding:'0.25em',
          height:'3.5em',
          '& input': {
            color: 'rgba(255, 255, 255, 0.8)',
            '&::selection': {
              backgroundColor: 'transparent', 
                        },
          },
          '& fieldset': {
            borderColor: 'var(--color-tertiary)', 
          },
          '&:focus-within': {
            boxShadow: '0 0 0 4px var(--color-primary)',
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <EmailIcon sx={{ padding: '9px',backgroundColor:'grey',borderRadius:'50%' }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '31px', backgroundColor: 'var(--color-secondary)',fontSize:'x-small',fontWeight:'bold',padding:'1.5em',width:'8em','&:hover': {backgroundColor:'var(--color-secondary)'} }}
              
            >
              Let’s Talk
            </Button>
          </InputAdornment>
        }
        variant="outlined"
      />
      </div>
    </div>
    <img src={mainImage} alt="mainImage" width={467.71} height={544.71}/>
   </main>
  )
}

export default Main