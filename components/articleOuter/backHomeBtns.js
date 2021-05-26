import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './articleOuter.module.scss';
import BtnHome from './images/btnHome.svg';
import BtnBack from './images/btnBack.svg';
import useTranslation from '../i18n/useTransition';

const BackHomeBtns = () => {
  const router = useRouter();
  const { lang } = router.query;
  const { t } = useTranslation('common');

  const HomeTitle = t('back-to-home');
  const BackTitle = t('back');
  return (
    <div className={styles.backHomeBtns}>
      <Link href={{ pathname: '/[lang]', query: { lang } }} as={`/${lang}`}>
        <a title={HomeTitle}>
          <img src={BtnHome} alt="" />
          {HomeTitle}
        </a>
      </Link>
      <a
        title={BackTitle}
        href="/"
        onClick={e => {
          e.preventDefault();
          router.back();
        }}
      >
        <img src={BtnBack} alt="" />
        {BackTitle}
      </a>
    </div>
  );
};
export default BackHomeBtns;
