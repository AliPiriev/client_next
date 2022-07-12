import React from "react";
import styles from "./VideoContent.module.css";
import img1 from "../../assets/img/videoCont.png";
const VideoContent = () => {
   
    return (
        <div className={styles.VideoContent}>
            <h3 className={styles.txt}>Motion design creates movement, excitement and adds life to otherwise static experiences. When it comes to digital environments, it not only creates delight but also serves strategic purposes such as brand expression, accessibility, information and guidance.</h3>
            <p className={styles.paragraph}>In this course, you will learn how to integrate motion to your designs with purpose in mind. We will cover topics ranging from micro-interactions to full screen transitions as well as how to prepare, animate and export your animations in After Effects and Lottie.</p>
            <div className={styles.video}>
                <img className={styles.image} src={img1} />
                <svg className={styles.Circle} width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70" cy="70" r="69.5" fill="white" fillOpacity="0.3" stroke="white"/>
                </svg>
                <svg className={styles.playBtn} width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 11L9.2855e-07 21.3923L1.83707e-06 0.607695L18 11Z" fill="white"/>
                    </svg>
            </div>
        </div>
    )
}



export default VideoContent;