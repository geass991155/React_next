import React from 'react';
import PropTypes from 'prop-types';
import styles from './articleOuter.module.scss';
import BackHomeBtns from './backHomeBtns';
import useTranslation from '../i18n/useTransition';
import { toUtc } from '../../utils/dayjs';
import { useRouter } from "next/router";

export const ArticleTop = ({ isUnit, children, publishUp, hits }) => {
  const { t } = useTranslation('common');
  const { asPath } = useRouter();

  if (isUnit) {
    return <>{children}</>;
  }

  return (
    <div className={styles.articleTop}>
      <span>
        {t('published-on')}
        ：
        {toUtc(publishUp).format('YYYY-MM-DD')}
      </span>
      <span>
        {asPath.search("online-art/online-exhibition") != -1 && asPath.split("/").length-1 === 4 ? "" : t('views')+"："+hits }
        
      </span>
    </div>
  );
};

ArticleTop.propTypes = {
  isUnit: PropTypes.bool,
  children: PropTypes.element,
  publishUp: PropTypes.string,
  hits: PropTypes.number,
};

ArticleTop.defaultProps = {
  isUnit: false,
  children: undefined,
  publishUp: undefined,
  hits: undefined,
};

export const ArticleBottom = ({ isUnit, modified }) => {
  const { t } = useTranslation('common');

  if (isUnit) {
    return (
      <div className={styles.articleBottom}>
        <BackHomeBtns />
      </div>
    );
  }

  return (
    <div className={styles.articleBottom}>
      {t('last-updated-on')}
      ：
      {toUtc(modified).format('YYYY-MM-DD')}
      <BackHomeBtns />
    </div>
  );
};

ArticleBottom.propTypes = {
  isUnit: PropTypes.bool,
  modified: PropTypes.string,
};
ArticleBottom.defaultProps = {
  isUnit: false,
  modified: undefined,
};
