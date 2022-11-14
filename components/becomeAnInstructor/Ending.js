import styles from '../../styles/becomeInstructor/Ending.module.scss';

const Ending = () => {

    return (
        <div className={`${'container textStyles'} ${styles.ending}`}>
            <div className={styles.ending}>
                <div className={styles.ending__item}>
                    <h3 className={styles.item__title}>Become an instructor today</h3>
                    <h5 className={styles.item__teaser}>Join an expanding community of elite instructors delivering world-class educational content.</h5>
                    <button className={styles.item__hotLink}>Need more details before you start? Click here to learn more.</button> 
                    {/* i need link href for `need more details`  */}
                </div>
            </div>
        </div>
    );
};

export default Ending;