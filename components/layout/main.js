import styles from './Layout.module.scss';


export default function Main({children}) {
  return (
    <main id="main" className={styles.main}>
      {children}
    </main>
  );
}
