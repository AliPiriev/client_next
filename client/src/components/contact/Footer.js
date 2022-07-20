import React from "react";
import styles from "./Footer.module.scss";
import dato2 from "../../assets/img/dato2.png";


const Footer = () => { 
    return (
        <div className={styles.box}>
             <h1 className={styles.h1}>Speaker</h1>
            <div className={styles.mainContetn}>  
                <div>
                  <img src={dato2} />
                </div>
                <div className={styles.container}>
                    <div>
                        <h1 className={styles.dt}>David Tavadze</h1>
                        <p className={styles.pa}>Creative Director at TUX Creative Co, previously Locomotive.</p>
                        <a  className={styles.pa} href="">@sokratgruzit</a>
                    </div>
                        <div className={styles.title}> 
                            <p className={styles.pa}>
                                He leads the digital team while staying a hands-on designer and creating brand
                                narratives via interactive web experiences. When he's not working, Louis loves spending
                                time in the outdoors with his canine crew: hiking, camping, climbing. He also shares his
                                passion for the field by teaching Web Design classes in college.
                            </p>
                        </div>
                    </div>
              </div>
         </div>
    )
}

export default Footer; 