import styles from '../../styles/about/Items.module.scss';
import RegistrationTest from './RegistrationTest';

const itemsTop = [
    {
        id: 0,
        title: 'Making learning more accessible',
        teaser: 'One educational platform for both instructors and students. Anyone across the globe can now have access to and create high-quality educational content.',
        btn: [{}]
    },
    {
        id: 1,
        title: 'Our Instructors',
        teaser: 'CORE Academy instructors have a passion for what they teach and want to share it with students across the globe.',
        btn: [{}]
    },
    {
        id: 2,
        title: 'Our Marketplace',
        teaser: 'Find educational content that fits your needs and style of learning. With multilingual courses from instructors worldwide, you can learn just about anything. We help organizations of different types and sizes prepare for the future. Companies, governments, and nonprofits can access our curated collection of business and technical courses to go further by placing learning at the center of their strategies.',
        btn: [{
            id: 3,
            title: 'Learn More',
            route: '/'
        }]
    }
]
const itemsBottom = [
    {
        id: 0,
        title: 'Work with us',
        teaser: 'CORE Academy is made up of learners and instructors. We strive to create a diverse, inclusive culture committed to helping employees thrive.',
        btn: [{
            id: 1,
            title: 'Become part of the team',
            route: '/'
        }]
    },
    {
        id: 2,
        title: 'Explore our research',
        teaser: 'We are committed to shaping the future of learning. Please take a look at our research to learn about the forces changing the way we work.',
        btn: [{
            id: 3,
            title: 'Learn More',
            route: '/'
        }]
    },
    {
        id: 4,
        title: 'Read our blog',
        teaser: 'Want to stay up to date with everything we`re doing? Check out the CORE Academy blog to read about all exciting developments, projects, ideas, and more at CORE Academy.',
        btn: [{
            id: 5,
            title: 'Read More',
            route: '/'
        }]
    },
    
]

const Items = () => {

    return (
        <div className={styles.outer}>
            <div className={styles.itemsWrap}>
                <div className='textStyles'>
                    <div className={styles.top}>
                        <div className='container'>
                            {itemsTop.map(item => {
                                return (
                                <div key={item.id} className={styles.item}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <p className={styles.teaser}>{item.teaser}</p>
                                    {item.btn.map(itemBtn => {
                                        return (
                                            <div key={itemBtn.id + 'hash'} className={styles.btn}>{itemBtn.title}</div>
                                        );
                                    })}
                                </div>
                                )  
                            })}
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className='container'>
                            {itemsBottom.map(item => {
                                    return (
                                    <div key={item.id} className={`${styles.item} ${styles.itemB}`}>
                                        <h3 className={styles.title}>{item.title}</h3>
                                        <p className={styles.teaser}>{item.teaser}</p>
                                        {item.btn.map(itemBtn => {
                                            return (
                                                <div key={itemBtn.id + 'hash'} className={styles.btn}>{itemBtn.title}</div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <RegistrationTest />
        </div>
    );
};

export default Items;