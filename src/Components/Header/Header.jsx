import styles from './Header.module.scss';

export default function Header() {
  const links = ['Home', 'AboutUs', 'Blog', 'Gallery', 'Contact'];

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a href='/'>Hazze</a>
        <div className={styles.links}>
          {links.map((value, i) => (
            <p key={i}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
