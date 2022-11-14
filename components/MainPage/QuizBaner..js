import React from "react";
import styles from "../../styles/MainPage/QuizBaner.module.scss"


const QuizBaner = () => { 
    return (
        <div className={styles.QuizBanerBox}>
            <img className={styles.backColor} src="img/QuizBaner/Mask group.png"/>
            <h1 className={styles.h1Tiel}>Want a Challenge?</h1>
            <p className={styles.pTitle}>Test your knowledge while you learn with our range of quizzes.</p>
            <button className={styles.quzbtn}>Take a Quiz</button>
        </div>
    )
}

export default QuizBaner;