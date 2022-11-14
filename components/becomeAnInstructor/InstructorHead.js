import styles from '../../styles/becomeInstructor/InstructorHead.module.scss';

const InstructorHead = () => {

    return (
        <div className={styles.head__background__wrap}>
            <img className={`${styles.bgL} ${styles.head__background}`} src='img/becomeInstructor/background1Light.png' alt="logo" />
            <img className={`${styles.bg} ${styles.head__background}`} src='img/becomeInstructor/background1.png' alt="logo" />
            <div className='container'>
                <div className={styles.head}>
                    <p className={styles.paragraph__sml}>Your journey awaits</p>
                    <h1 className={styles.paragraph__big}>Become an instructor</h1>
                    <h1 className={styles.paragraph__big}><span>enrich lives </span> - including your own</h1>
                </div>
            </div>
        </div>
    )
}

export default InstructorHead;