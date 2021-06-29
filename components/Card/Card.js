import React, { useState, useCallback } from 'react';
// import styles from './photoList.module.scss';
import styles from './card.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Image from '../image';

const Card = ({
  to,
  as,
  subject,
  isOut,
  isAside,
}) => {
  
  const children = (  
    <div className={styles.card}>
      <div className={styles.border}></div>
      <img src={'https://i.imgur.com/TtnwFk5.jpg?1'} />
      <h1>{subject}</h1>
      <h2>120 測試測試</h2>
      <div className={styles.arrowbox}>
        <div className={styles.arrow}></div>
      </div>
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
