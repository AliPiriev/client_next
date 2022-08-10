import React from 'react';
import styles from '../../styles/contactScss/CourseHeader.module.scss';

const CourseHeader = () => {

  return (
    <div className={styles.container}>    
        <img className="img-absolute" src="/img/ConcontConthed/background.png" />   
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
                    <div className={styles.minibackground}>
                        <img className="img-absolute" src="img/ConcontConthed/dato.png"/>
                    </div>
                    <div>
                        <p className={styles.name}> David Tavadze</p>
                    </div>
              </div> 
              <div className={styles.butn}>
              <button className="orange-bg-btn">Buy Course $65</button> 
          </div> 
        </div> 
   </div>
 );
};



export default CourseHeader;
