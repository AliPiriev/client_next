import React from "react";
import styles from "./VideoContent.module.scss";
import img1 from "../../assets/img/videoCont.png";
const VideoContent = () => {

    return (
        <div className={styles.VideoContent}>
            <h3 className={styles.txt}>Motion design creates movement, excitement and adds life to otherwise static experiences. When it comes to digital environments, it not only creates delight but also serves strategic purposes such as brand expression, accessibility, information and guidance.</h3>
            <p className={styles.paragraph}>In this course, you will learn how to integrate motion to your designs with purpose in mind. We will cover topics ranging from micro-interactions to full screen transitions as well as how to prepare, animate and export your animations in After Effects and Lottie.</p>
            <div className={styles.video}>
                <img className={styles.image} src={img1} />
                <button className={styles.Circle}>
                    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70" cy="70" r="69.5" fill="white" fill-opacity="0.3" stroke="white" />
                        <path d="M82 70L64 80.3923L64 59.6077L82 70Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    )
}



export default VideoContent;