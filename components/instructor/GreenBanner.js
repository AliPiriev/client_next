import styles from "../../styles/instructorScss/Instructors.module.scss";
import  { useState , useEffect } from "react";

const GreenBanner = () => {
        const [active, setActive] = useState(null);
        const [theme, setTheme] = useState(false);
    
        useEffect (() => {
          const body = document.getElementsByTagName('body')[0];
          if (theme) {
             body.classList.add('light');
          }else {
             body.classList.remove('light');
          }
        }, [theme])

    return (
        <div id={styles[theme]} className={styles.greenBanner}>
            <h1 className={`${styles.subTtl} ${styles.subTltLigth}`}>Become a Instructor</h1>
            <p className={`${styles.txt} ${theme ? styles.subTxtLigth: ''}`}>Teach what you love. Corrector gives you the tools to create a course.</p>
            <button className= {`${"orange-bg-btn"} ${styles.orangBtn}`} >Start Teaching</button>
        </div>
    )
}
export default GreenBanner; 