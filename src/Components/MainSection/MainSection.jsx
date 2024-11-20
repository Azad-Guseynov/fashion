import styles from './MainSection.module.scss';

export default function MainSection () {
    return (
        <div className={styles.container}>
            <div className={styles.titles}>
                <p>Office Fashion</p>
                <h2>New Fashion</h2>
                <p className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Read More</button>
            </div>
        </div>
    )
}