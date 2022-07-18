import React, {useState} from 'react'
import TabsTwo from './TabsTwo';
import Qa from './Qa';
import styles from "./Tabs.module.scss";
import tabImg from "../../assets/img/tabImg/tabimg.png";



const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.tabsContainer}>
        <div className={styles.blockTabs}>
        <button
          className={toggleState === 1 ? `${styles.tabs}, ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(1)}
        >
          Course Details
        </button>
        <button
          className={toggleState === 2 ?  `${styles.tabs}, ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(2)}
        >
          TReviews (17)
        </button>
        <button
          className={toggleState === 3 ?  `${styles.tabs}, ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(3)}
        >
          QA
        </button>
        </div>
        <div className={styles.contentTabs}>
            <div className={toggleState === 1 ? `${styles.content}, ${styles.activeContent}` : styles.content}>
            <div className={styles.tabInfo}>
                <div className={styles.mainImg}>  
                    <img className={styles.tabImg} src={tabImg} alt=""></img>
                </div>
                <div className={styles.infoText}>
                    <div className={styles.infoTitle}>
                        <div className={styles.dotTitles}>
                           <div className={styles.yellow}></div>
                           <div><h4 className={styles.yellTitle}>intermediate</h4></div>
                        </div>
                        <div className={styles.dotTitles}>
                            <div className={styles.dot}></div>
                            <div><h4 className={styles.dotTitle}>english</h4></div>
                        </div>
                        <div className={styles.dotTitles}>
                        <div className={styles.dot}></div>
                            <div><h4 className={styles.dotTitle}>8 min</h4></div>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.intro}>Introduction to Programming with Python and Java</h3>
                        <h5 className={styles.dt}>David Tavadze</h5>
                    </div>
                    <div className={styles.buy}>
                        <h2 className={styles.payment}>$65.00</h2>
                        <button className={styles.btn}>Buy Course</button>
                    </div>
                </div>
            </div>
            </div>       
            <div className={toggleState === 2 ? `${styles.content}, ${styles.activeContent}` : styles.content}>
           <TabsTwo />
            </div>    
            <div className={toggleState === 3 ? `${styles.content}, ${styles.activeContent}` : styles.content}>
            <Qa />
            </div>         
        </div>
    </div>
  )
}

export default Tabs;