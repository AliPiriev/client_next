import React from "react";
import styles from "./Instructors.module.scss"; 
import img from "../../assets/img/GreenBannerBackground.png";

const GreenBaner = () => {
    return (
        <div className={styles.greenBanner}>
            <div className={styles.backgroundWrap}>
                <img className={styles.background} src={img} alt="" />
            </div>
                <h1 className={styles.subTtl}>Become a Instructor</h1>
                <p className={styles.txt}>Teach what you love. Corrector gives you the tools to create a course.</p>
                <a href="#"className={styles.btn}>Start Teaching</a>
        </div>
    )
}


export default GreenBaner;