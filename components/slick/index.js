import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Slick from "react-slick";
import styles from "./slick.module.scss";
import useTranslation from "../i18n/useTransition";

/* isRelatedSlick 適用頁面：展覽內頁、網上開展內頁 */
// eslint-disable-next-line react/prop-types
function PrevArrow({ className, onClick }) {
  const { t } = useTranslation("common");
  return (
    <button type="button" className={className} onClick={onClick}>
      <span>{t("prev")}</span>
    </button>
  );
}

// eslint-disable-next-line react/prop-types
function NextArrow({ className, onClick }) {
  const { t } = useTranslation("common");
  return (
    <button type="button" className={className} onClick={onClick}>
      <span>{t("next")}</span>
    </button>
  );
}


export default function Index({ children, isRelatedSlick, ...rest }) {
  const [init, setInit] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef(0);

  const { settings } = rest;
  settings.beforeChange = (current, next) => {
    setActive(next);
  };
  settings.onInit = () => {
    setInit(true);
  };

  if (settings.arrows) {
    settings.prevArrow = <PrevArrow />;
    settings.nextArrow = <NextArrow />;
  }

  const handleSlickGoTo = (i) => {
    ref.current.slickGoTo(i);
  };

  settings.appendDots = function appendDots(dots) {
    return <nav className={styles.slickNavContainer}>{dots}</nav>;
  };
  settings.customPaging = function customPaging(i) {
    let fillClass = styles.slickNavButtonFill;

    if (init) {
      if (i === active) {
        fillClass = styles.slickNavButtonFilling;
      }
    }

    return (
      <button
        type="button"
        key={i.toString()}
        className={styles.slickNavButton}
        onClick={() => {
          handleSlickGoTo(i);
        }}
        onFocus={() => {
          ref.current.slickPause();
        }}
        onKeyDown={() => {
          ref.current.slickPlay();
        }}
        title={`第 ${i + 1} 頁`}
      >
        <span className={fillClass}>{`第 ${i + 1} 頁`}</span>
      </button>
    );
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <Slick
        ref={ref}
        {...settings}
        className={isRelatedSlick ? styles.relatedSlick : styles.defaultSlick}
      >
        {children}
      </Slick>
    </>
  );
}

Index.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  arrow: PropTypes.bool,
  isRelatedSlick: PropTypes.bool,
};

Index.defaultProps = {
  isRelatedSlick: false,
  settings: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    fade: false,
    prevArrow: <PrevArrow className={styles.prev} />,
    nextArrow: <NextArrow className={styles.next} />,
  },
};
