import Button from '../Button/Button';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>NUMBER SPEAKS</p>
        <h2>We have a lot of experience</h2>
        {/* <button>ReadMore</button> */}
        <Button />
      </div>
      <div className={styles.right}>
        <div className={styles.flexItem}>
          <p className={styles.number}>2034</p>
          <div className={styles.titles}>
            <h3>Successful projects</h3>
            <p>
              Since its establishment in 2005, Fashion has been focusing on project management &
              implementation through cooperation.
            </p>
          </div>
        </div>
        <div className={styles.flexItem}>
          <p className={styles.number}>1054</p>
          <div className={styles.titles}>
            <h3>Events</h3>
            <p>
              Since its establishment in 2005, Fashion has been focusing on project management &
              implementation through cooperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
