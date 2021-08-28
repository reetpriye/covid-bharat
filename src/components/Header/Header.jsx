import React from 'react';
import styles from './Header.module.css';

function Heading() {
  return (
    <div className={styles.heading}>
      <span id={styles.heading1}>Covid</span>
      <span id={styles.heading2}>Bharat</span>
    </div>
  );
}

export default Heading;
