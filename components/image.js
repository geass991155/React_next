import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import defaultImage from './images/default.png';
import styles from './layout.module.scss';

export default function Image({ src, alt, isCover, ...rest }) {
  const [imgSrc, setSrc] = useState(src);

  useEffect(() => {
    setSrc(src);
  }, [src]);

  
  if (isCover) {
    return (
      <img src={imgSrc} alt={alt} {...rest}  />
    );
  }
  return (
    <div className={styles.coverImg}>
      <img src={imgSrc} alt={alt} {...rest}/>
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  isCover: PropTypes.bool,
};
Image.defaultProps = { alt: '', isCover: false };
