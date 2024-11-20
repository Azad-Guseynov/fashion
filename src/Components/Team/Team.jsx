import styles from './team.module.scss';
import items from '../../assets/designer.json';

export default function Team() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2>OUR TEAM</h2>
        <p>Top Designers</p>
        <div className={styles.images}>
          {items.map((obj) => (
            <img key={obj.id} src={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}
