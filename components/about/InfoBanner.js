import { useState, useEffect } from 'react';
import styles from '../../styles/about/InfoBanner.module.scss';

const InfoBanner = () => {

    return (
        <div  className={styles.banner}>
            <div className='container'>
                <p className={`${styles.blockquote} ${styles.blockquoteLight}`}>CORE Academy is partnered with leading organizations and universities to unlock globally accessible and affordable online educational content for students. Now anyone anywhere can access a wide variety of learning opportunities - from job-ready certificates and degree programs to hands-on projects.</p>
            </div>
        </div>
    );
};

export default InfoBanner;