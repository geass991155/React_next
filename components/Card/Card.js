import React, { useState, useCallback } from 'react';
// import styles from './photoList.module.scss';
import styles from './card.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Image from '../image';

const Card = ({
  to,
  as,
  src,
  subject,
  isCalendar,
  Component,
  isOut,
  isAside,
}) => {
  
  const children = (  
    // <>
    // <div className={styles.card}>
    //   <div className={styles.border}></div>
    //   <img src={'https://i.imgur.com/6dbHwdn.png'} />
    //   <h1>{subject}</h1>
    //   <h3>120 測試測試</h3>
    // </div>
    // </>
    <>
     
        <div className={styles.card}>
          <div className={styles.border}></div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" />
          <h1>{subject}</h1>
          <h2>120 測試測試</h2>
        </div>
        
      </>
  );

  if (isOut) {
    return (
        <a
          href={to}
          title={`另開新分頁`}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
    );
  }

  return (
    <Link href={to} as={as}>
      <a title={subject} href={to} className={`${styles.card} ${isAside ? styles.halfCard : ''}`}>
        {children}
      </a>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  src: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  isCalendar: PropTypes.bool,
  Component: PropTypes.node,
  isOut: PropTypes.bool,
  isAside: PropTypes.bool,
};
Card.defaultProps = {
  isCalendar: false,
  Component: null,
  as: undefined,
  isOut: false,
  isAside: false,
};
