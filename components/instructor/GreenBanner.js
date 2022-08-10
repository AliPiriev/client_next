import React from "react";
import styles from "../../styles/instructorScss/Instructors.module.scss";

const GreenBanner = () => {
    return (
        <div className={styles.greenBanner}>
            <h1 className={styles.subTtl}>Become a Instructor</h1>
            <p className={styles.txt}>Teach what you love. Corrector gives you the tools to create a course.</p>
            <button className="orange-bg-btn" >Start Teaching</button>
        </div>
    )
}


export default GreenBanner; 