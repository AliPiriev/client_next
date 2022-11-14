
// import parse from 'html-react-parser';
import styles from '../../styles/home/IntroBox.module.scss';

function IntroBox({ data }) {

   return (
      <div className={styles.introBox}>
         <div className={`${styles.inner} ${'textStyles'}`}>
            <h1 className={styles.title}>World-Class Education For Everyone. <span>Together We Learn.</span></h1>
            <h4 className={styles.teaser}>Build and develop your skills with online educational content from the world's top institutions and organizations.</h4>
         </div>
      </div>
   )
}

export default IntroBox;