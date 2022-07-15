import React from 'react';
import styles from './MyComponent.module.scss';
import img from "../../assets/img/logo.png";
import img1 from "../../assets/img/background.png";
import imgProfile from "../../assets/img/dato.png";

const MyComponent = () => {
  return (
    <div className={styles.container}>    
        <img className={styles.background} src={img1} />   
          <div className={styles.middleContainer} >
               <div className={styles.boxMid}>
                    <div className={styles.big}>
                        <div className={styles.circle}></div>
                        <a herf="">INTERMEDATE</a>
                    </div>
                      <div className={styles.small}>
                          <div className={styles.circleSmol}></div>
                          <a href="">ENGLISH</a>
                      </div>
                      <div className={styles.small}>
                          <div className={styles.circleSmol}></div>
                          <a href=''>8 MIN</a>
                      </div>
                </div>
              <div className={styles.endIntroductionTitle}>
                  <h1 className={styles.endIntroduction} >Introduction to Programming with Python and Java</h1>   
              </div>
              <div className={styles.containerProfile}>
                    <div>
                        <img className={styles.profileImg} src={imgProfile} />
                    </div>
                    <div>
                        <p className={styles.name}> David Tavadze</p>
                    </div>
              </div> 
          </div> 
          <div className={styles.butn}>
              <button className={styles.btn}>Buy Course $65</button> 
        </div> 
   </div>
);
};



export default MyComponent;
