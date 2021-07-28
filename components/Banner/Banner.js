import React, { useState, useEffect, useRef ,useCallback} from "react";
// import styles from './photoList.module.scss';
import styles from './banner.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Image from 'next/image'
import useScroll from './useScroll';

const Banner = ({}) => {
  const [scrollEnd,number,lastScrollY] = useScroll();
  
  // 替換gif
  const gif = [
    styles.gif_down,
    styles.gif_up
  ];
  
  const children = (  
    <>
    <div className={styles.banner}>
	      <img className={styles.banner_img} src="https://i.imgur.com/q2AdFvY.jpg"></img>
    
    { scrollEnd && lastScrollY !== 0  ?(
      <div className={gif[number]}></div>
    ) : (
      <img className={styles.stop_img} src="https://i.imgur.com/imsoazB.png"></img>
    )}
    </div>
    </>
  );


  return (
      <>
        {children}
      </>
  );
};

export default Banner;

