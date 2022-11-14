import { useState, useEffect } from 'react';
import styles from '../../styles/becomeInstructor/HowTo.module.scss';

const stepsData = [
    {
        id: 0,
        title: 'Plan your curriculum',
        text: 'You start with a passion and knowledge, then utilize our Marketplace Insights tool to choose a good topic for your content. How you teach is entirely your choice.',
    },
    {
        id: 1,
        title: 'Plan your curriculum',
        text: 'You start with a passion and knowledge, then utilize our Marketplace Insights tool to choose a good topic for your content. How you teach is entirely your choice.',
    },
    {
        id: 2,
        title: 'Plan your curriculum',
        text: 'You start with a passion and knowledge, then utilize our Marketplace Insights tool to choose a good topic for your content. How you teach is entirely your choice.',
    },
    {
        id: 3,
        title: 'Plan your curriculum',
        text: 'You start with a passion and knowledge, then utilize our Marketplace Insights tool to choose a good topic for your content. How you teach is entirely your choice.',
    },
    {
        id: 4,
        title: 'Plan your curriculum',
        text: 'You start with a passion and knowledge, then utilize our Marketplace Insights tool to choose a good topic for your content. How you teach is entirely your choice.',
    },
    {
        id: 5,
        title: 'Plan your curriculum',
        text: 'You start with a passion and knowledge, then utilize our Marketplace Insights tool to choose a good topic for your content. How you teach is entirely your choice.',
    }
]

const HowToBegin = () => {

    return (
        <div className={styles.howToBegin}>
             <img className={`${styles.background} ${styles.bgL}`} src='img/becomeInstructor/background3Light.png' />
             <img className={`${styles.background} ${styles.bg}`} src='img/becomeInstructor/background3.png' />
            <div className='container textStyles'>
                <h2 className={styles.title}>How To Begin</h2>
                <div className={styles.steps}>
                    {stepsData.map((item, index) => {
                        return (
                            <div key={item.id + index} className={`${styles.item} ${index % 2 ?? 0 ? styles.right : ''}`}>
                                <div className={styles.text}>
                                    <h3 className={styles.item__title}>{item.title}</h3>
                                    <h4 className={styles.item__quote}>{item.text}</h4>
                                </div>
                                <div className={styles.num}>{index + 1}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HowToBegin;