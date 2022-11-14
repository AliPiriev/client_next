import React, { useState, useEffect } from "react";
import styles from "../../styles/contact/Form.module.scss";

const Form = () => { 
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
        <div id={styles[theme]} className={styles.Formbox}>
                <div className={`${styles.box} ${'container'}`}>
                <form>  
                    <div className={`${'custom-input'} ${styles.costomInput}`}>
                        <input className={styles.lightiinp1} type='text' placeholder='your name' />
                        <label className={styles.lightiinp} >full name</label>
                    </div>
                    <div className={`${'custom-input'} ${styles.costomInput}`}>
                        <input className={`${styles.lightiinp1} ${'Lightinp'}`}   type='text' placeholder='type e-mail address' />
                        <label className={styles.lightiinp} >email address </label>
                    </div>
                    <div className={`${'custom-input'} ${styles.costomInput}`}>
                        <input className={styles.lightiinp1}   type='text' placeholder  ='enter your phone number' />
                        <label className={styles.lightiinp} >phone number</label>
                    </div>
                    <div className={`${'custom-input'} ${styles.costomInput}`}>
                        <input className={styles.lightiinp1}   type='text' placeholder  ='enter password' />
                        <label className={styles.lightiinp}  >Password </label>
                    </div>
                    <div className={`${'custom-input'} ${styles.costomInput}`}>
                        <input className={styles.lightiinp1}   type='text' placeholder  ='enter password' />
                        <label className={styles.lightiinp} >Password </label>
                            </div>
                            
                    <div className={`${"test-input"} ${styles.testInput}`}>
                        <label className={`${"mainBox" } ${styles.mainBoxtwo}`}>
                            <p className={`${styles.lightchng}`}>By signing up, you agree to <span className={`${"fontchng"} ${styles.lightchng2}` }>Terms of Service and Privacy Policy.</span></p>
                            <input   type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                    </div>
                    <div className={styles.btn}>
                        <button  className={`${"blue-btn"} ${styles.bluebtn} `}>Register</button>
                    </div>
            </form>
        </div>
    </div>  
    )
};

export default Form;