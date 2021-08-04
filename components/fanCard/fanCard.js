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
  content,
  isOut,
  isAside,
}) => {
  
  const children = ( 
    <div className={styles.card}>
      <img src={'https://i.imgur.com/R5BvfLB.jpg'} />
      <h1>{subject}</h1>
      <h2>{content}</h2>
    </div>
    
  );

  if (isOut) {
    return (
      <>
      {children}
      </>
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
