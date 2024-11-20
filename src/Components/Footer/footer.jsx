import Button from '../Button/Button';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hazze</h1>
        <p>Address: 60-49 Road 11378 New York</p>
        <p>Phone: +65 11.188.888</p>
        <p>Email: hello.colorlib@gmail.com</p>
      </div>

      <div>
        <h2>Useful Links</h2>
        <p>About Us</p>
        <p>Model</p>
        <p>Contact</p>
        <p>Serivius</p>
      </div>

      <div>
        <div>
          <h2>Join The Newsletter</h2>
          <p>Get E-mail updates about our latest shop and special offers.</p>
          <input type='text' placeholder='Enter ypur email' />
        </div>
        {/* <button>Subscibe</button> */}
        <Button />
      </div>

      <div className={styles.insta}>
        <h2>Instagram</h2>
        <div className={styles.instaImages}>
          <img src='instagram/instagram-1.jpg' alt='' />
          <img src='instagram/instagram-2.jpg' alt='' />
          <img src='instagram/instagram-3.jpg' alt='' />
          <img src='instagram/instagram-4.jpg' alt='' />
          <img src='instagram/instagram-5.jpg' alt='' />
          <img src='instagram/instagram-6.jpg' alt='' />
        </div>
      </div>
    </div>
  );
}
