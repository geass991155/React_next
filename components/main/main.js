import React, { useState, useCallback } from 'react';
import styles from './main.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link'

const Main = ({ children }) => {
  
  return (
    <main id="main" className={`${styles.main} ${styles.hasAside}`}>
        {children}
    </main>
  );
};

export default Main;

// Main.propTypes = {
//   to: PropTypes.string.isRequired,
// };
