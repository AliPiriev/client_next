import styles from '../../styles/about/HeaderBanner.module.scss';

const HeaderBanner = () => {
    return (
        <div className={styles.headerWrap}>
            <div className={styles.header}>
                <img className={`${styles.bckImg} ${styles.bgL}`} src='img/about/background1Light.png' />
                <img className={`${styles.bckImg} ${styles.bg}`} src='img/about/background1.png' />
                <div className='container textStyles'>
                    <div className={styles.text}>
                        <h1 className={styles.title}>About <span>CORE</span> academy</h1>
                        <h2 className={styles.teaser}>We are a global hub of world-class knowledge and believe that learning has the power to transform people's lives.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;