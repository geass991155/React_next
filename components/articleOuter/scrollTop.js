import React from 'react';
import styles from './articleOuter.module.scss';
import Link from '../link';
import useScroll from '../useScroll';

const ScrollTop = () => {
  const isScroll = useScroll();

  const handleClick = (e) => {
    e.preventDefault();
    if (isScroll) document.body.scrollTo(0, 0);
  };

  return (
    <Link
      className={isScroll ? styles.scrollTopActive : styles.scrollTop}
      to="#logo"
      title="回頂端"
      id="scrollToTop"
      onClick={handleClick}
    >
      回頂端
    </Link>
  );
};
export default ScrollTop;