import React from 'react';
import styles from './TopJumper.module.scss';

function scrollTop() {
  return (
    <div className={styles.jumper} onClick={()=>window.scrollTo(0, 0)}>
      <span className="text"> </span>
    </div>);
}

export default scrollTop;

