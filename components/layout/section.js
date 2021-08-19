import styles from './Layout.module.scss';

export default function Section({ children, text }) {
  return (
    <section className={styles.section}>
      <h2>{text}</h2>
      {children}
    </section>
  );
}
