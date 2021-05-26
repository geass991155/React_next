import React from 'react';
import PropTypes from 'prop-types';
import styles from './fnaCardList.module.scss';
// import FontSize from "./fontSize";

/* 適用頁面：典藏維護、行事曆、線上展覽、線上環景展覽、桃源國際藝術獎 */

const CardList = ({ children }) => (
  <div className={styles.cardList}>
    {children}
  </div>
);

export default CardList;

CardList.propTypes = { children: PropTypes.array.isRequired };
