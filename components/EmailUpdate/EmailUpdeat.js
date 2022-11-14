import styles from '../../styles/EmailBanner/EmailBanner.module.scss';
import { useState ,useEffect } from 'react';

const SubscribeBox = () => { 
    const [theme, setTheme] = useState(false);
    const [active, setActive] = useState(null);

    useEffect (() => {
        const body = document.getElementsByTagName('body')[0];
        if (theme) {
           body.classList.add('light');
        }else {
           body.classList.remove('light');
        }
      }, [theme])
  


    return(
        <div id={styles[theme]} className={`${styles.containerBox} ${'container'}`}>
            <img className={`${styles.containerbg} ${styles.backgroundD}`} src={theme ? "/img/Lightmode/MaskgroupBner.png" :  "/img/MainPage/BG1.png"  }/>
            <img className={`${styles.containerbg} ${styles.backgroundL}`} src='/img/Lightmode/MaskgroupBner.png' />
            <img className={`${styles.containerbg} ${styles.backgroundGradient}`} src="/img/MainPage/BG1.png" />
            <img className={styles.BGimg} src={theme ?  "/img/Lightmode/Rectangle.png" : "/img/EmailUpdeatimg/BG.png"} />
            <h1 className= {`${styles.tlth1} ${styles.tlth1Light}`}>Keep up to date <span className={styles.span}> — </span> Get e-mail updates</h1>
            <p className={`${styles.tltp1} ${styles.title1Light}`}>Stay tuned for the latest company news.</p>
               <div className={`${styles.containerBox1} ${theme ? styles.containerBox1Light : ''}`}>
                  <input className={styles.contactinput} type="txst"  placeholder='myname@example.com'  /> 
                  <div onClick={styles.actMark} className={styles.clkbtn}>Join now</div>
               </div>
        </div>
    )
};
   

export default SubscribeBox;