import React, { useState, useCallback } from 'react';
// import styles from './photoList.module.scss';
import styles from './fanCard.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Image from '../image';

const FanCard = ({
  to,
  as,
  subject,
  isOut,
  isAside,
}) => {
  
  const children = ( 
     <>
      <div className={styles.fantitle}>
        <h1>{subject}</h1>
      </div>
      <div className={styles.arrowbox}>
        <div className={styles.arrow}></div>
      </div>
      <img src={'https://i.imgur.com/j56CGXH.png'} />
      <div className={styles.imgcontent}>
        <h3>測試測試測試測試文字測試測試測試測試文字測試測試測試測試文字</h3>
      </div>
      <div className={styles.singtext}>測試文字</div>
      </>
  );

  return (
    <div className={styles.fan}>
    <Link href={to} as={as}>
      <a title={subject} href={to} className={`${styles.card} ${isAside ? styles.halfCard : ''}`}>
        {children}
      </a>
    </Link>
    
    </div>
  );
};

export default FanCard;

FanCard.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  src: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  isCalendar: PropTypes.bool,
  Component: PropTypes.node,
  isOut: PropTypes.bool,
  isAside: PropTypes.bool,
};
FanCard.defaultProps = {
  isCalendar: false,
  Component: null,
  as: undefined,
  isOut: false,
  isAside: false,
};
