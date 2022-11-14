import styles from '../../styles/home/EmailBanner.module.scss'

const EmailBanner = () => { 

    return(
        <div className={styles.emailBanner} >
            <img className={styles.background} src="/img/EmailUpdeatimg/BG.png" alt='background' />  
            <div className={`${'textStyles'} ${styles.inner}`}>
               <h3 className={styles.fntText}>Keep up to date <span className={styles.span}> — </span> Get e-mail updates</h3>
               <p className={styles.fntText}>Stay tuned for the latest company news.</p>
               <div className={styles.input}>
                  <input type="text"  placeholder='myname@example.com'  /> 
                  <div className={styles.btn}>Join now</div>
               </div>
            </div>
            
        </div>
    )
};
   

export default EmailBanner;