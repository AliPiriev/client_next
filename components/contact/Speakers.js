import React from "react";
import styles from "../../styles/contact/Speakers.module.scss";
import { useState , useEffect } from "react";




const Speakers = () => { 
  const [active, setActive] = useState(null);
  const [theme, setTheme] = useState(false);


    useEffect (() => {
    const body = document.getElementsByTagName('body')[0];
    if (theme) {
       body.classList.add('light');
    }else {
       body.classList.remove('light');
    }
  }, [theme] );


    return (
        <div className="container">
            <div className={styles.box}>
            <h1 className={styles.h1}>Speaker</h1>
              <div className={styles.mainContetn}>  
                <div className={styles.imgbackrgound}>
                <img className="img-absolute" src="img/ConcontConthed/dato2.png" />
                </div>
                  <div className={styles.container}>
                     <div>
                        <h1 className={styles.dt}>David Tavadze</h1>
                        <p className={styles.pa}>Creative Director at TUX Creative Co, previously Locomotive.</p>
                        <a  className={styles.pa} href="">@sokratgruzit</a>
                     </div>
                      <div className={styles.title}> 
                         <p className={styles.paragrap}>
                            He leads the digital team while staying a hands-on designer and creating brand
                            narratives via interactive web experiences. When he's not working, Louis loves spending
                            time in the outdoors with his canine crew: hiking, camping, climbing. He also shares his
                            passion for the field by teaching Web Design classes in college.
                         </p>
                    </div>
                </div>
            </div>
         </div>
     </div>
    )
}

export default Speakers; 