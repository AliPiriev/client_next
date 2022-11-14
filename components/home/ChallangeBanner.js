import { useState, useEffect } from "react";
import styles from "../../styles/home/ChallangeBanner.module.scss";


const ChallangeBanner = () => { 

    return (
        <div className={styles.banner}>
            <img className={styles.background} src="/img/MainPage/quizBg.png"/>
            <div className="textStyles container">
            <div className={styles.text}>
                <h3>Want a Challange?</h3>
                <h4>Test your knowledge while you learn with our range of quizzes.</h4>
                <button>
                    {/* <Link href="/"> */}
                    Take A Quiz
                    {/* </Link> */}
                </button>
            </div>
            </div>
        </div>
    )
}

export default ChallangeBanner;