import cards from '../../assets/services.json';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div className={styles.container}>
      <p>OUR SERVICES</p>
      <h2>Best Services Save The World</h2>
      <div className={styles.cards}>
        {cards.map((obj) => (
          <div key={obj.id} className={styles.card}>
            <img key={obj.id} src={obj.imageUrl} />
            <h1>{obj.name}</h1>
            <p>{obj.titles}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
