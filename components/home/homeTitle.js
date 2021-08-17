import React, { useState, useCallback } from 'react';
import styles from './homeTitle.module.scss';
import PropTypes from 'prop-types';
import useScroll from '../sideAnim/useScroll';

const homeTitle = ({title}) => {
  const [scrollEnd,number,lastScrollY] = useScroll();
  
  const children= (  
    <div className={styles.title}>
    <h1><span className={styles.distance}>{title}</span></h1>
    </div>
  );

  return (
    <>
      {children}
    </>
  );
};

export default homeTitle;

homeTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
homeTitle.defaultProps = {
};
