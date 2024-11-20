import Button from '../Button/Button';
import styles from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <img src='about-us.jpg' alt='about-us.jpg' />
      <div className={styles.titles}>
        <p className={styles.about}>About Us</p>
        <h2>About Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button />
      </div>
    </div>
  );
}
