import styles from '../../styles/becomeInstructor/Learn.module.scss';

const Learn = () => {

    return (
        <div className={styles.learn}>
            <img className={styles.learn__background} src="img/becomeInstructor/background2.png" />
            <div className='container textStyles'>
                <div className={styles.learn__wrap}>
                    <div className={styles.learn__inner}>
                        <h2 className={styles.learn__title}>Together We Learn</h2>
                    </div>
                    <div className={styles.learn__list}>
                        <div className={`${styles.list__item} ${styles.item__first}`}>
                            <h2 className={styles.item__title}>Your style of teaching</h2>
                            <p className={`${styles.item__blockquote} ${styles.paragraph__grey}`}>You have complete control over your content and can decide what content you want to publish and how you want to present it.</p>
                        </div>
                        <div className={`${styles.list__item} ${styles.list__item__marked}`}>
                            <h2 className={styles.item__title}>Enrich and inspire learners</h2>
                            <p className={`${styles.item__blockquote} ${styles.paragraph__grey}`}>Play a pivotal part in learners' careers by helping them gain new skills and encouraging them to explore their interests.</p>
                        </div>
                        <div className={`${styles.list__item} ${styles.item__last}`}>
                            <h2 className={styles.item__title}>Get rewarded</h2>
                            <p className={`${styles.item__blockquote} ${styles.paragraph__grey}`}>Grow your professional network and develop your expertise while earning on each paid enrollment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learn;