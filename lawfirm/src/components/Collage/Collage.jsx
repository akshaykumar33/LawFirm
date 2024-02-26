import React from 'react';
import styles from './Collage.module.css';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';

function Collage() {
  return (
    <div className={styles.container}>
      <div className={styles.collageHeader}>Area of Practices</div>
      <div className={styles.imageList}>
        {itemData.map((item) => (
         <div key={item.id} className={item.size === 'big' ? styles.big : styles.small}>
         <img src={item.img} alt={item.title} />
         <div className={styles.typography}>{item.text}</div>
       </div>
       
        ))}
      </div>
    </div>
  );
}

const itemData = [
  {
    id: 1,
    img: img1,
    title: "img1",
    size: 'big',
    text:'BUSINESS LAW'
  },
  {
    id: 2,
    img: img2,
    title: "img2",
    size: 'small',
    text:'Partnership LAW'
  },
  {
    id: 3,
    img: img3,
    title: "img3",
    size: 'small',
    text:'REAL ESTATE LAW'
  },
  {
    id: 4,
    img: img4,
    title: "img4",
    size: 'big',
    text:'BUSINESS LAW'
  },
  {
    id: 5,
    img: img5,
    title: "img5",
    size: 'big',
    text:'LANDLORD DISPUTES'
  },
  {
    id: 6,
    img: img6,
    title: "img6",
    size: 'small',
    text:'ELDER ABUSE'
  }
];

export default Collage;
