import styles from './Portfolio.module.scss';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h2>OUR PORTFOLIO</h2>
      <p>Turn Your Dream Into Reality</p>
      <div className={styles.images}>
        <img className={styles.img1} src='portfolio/portfolio-1.jpg' alt='' />
        <img className={styles.img2} src='portfolio/portfolio-2.jpg' alt='' />
        <img className={styles.img3} src='portfolio/portfolio-3.jpg' alt='' />
        <img className={styles.img4} src='portfolio/portfolio-4.jpg' alt='' />
      </div>
    </div>
  );
}
