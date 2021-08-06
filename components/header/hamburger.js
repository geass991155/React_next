import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from './hamburge.module.scss';
import SideBar from './sideBar.js';

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useRouter();
  
    useEffect(() => {
      setOpen(false);
    }, [pathname]);
  
    const handleClick = () => {
      setOpen((open) => !open);
    };
  
    return (
        <>
        <div className={styles.hamburger}>
            <div onClick={handleClick} className={styles.container}>
                <span className={open ? `${styles.bar} ${styles.active}` : styles.bar} />
            </div>
        </div>
        <div className={styles.water}>
            <div className={styles.drop}></div>
            <div className={styles.drop}></div>
            <div className={styles.drop}></div>
            <div className={styles.drop}></div>
        </div>
        <SideBar open={open}/>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<filter id="goo">
				<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
			</filter>
		</defs>
	</svg>
        </>
    );
  };
  
  export default Hamburger;