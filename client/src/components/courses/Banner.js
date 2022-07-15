import React from "react";
import SmallBannerBox from "../home/SmallBannerBox";
import styles from "./Banner.module.scss";
import img1 from '../../assets/img/backgroundBanner.png';

const Banner = () => {

    const smallData = [{
        title: "Check yourself in the quiz",
        paragraph: "10 questions  •  10 min",
        button: "Start Quiz Now",
        img: img1
    }];

    return (
        <div className={styles.container}>
            {smallData.map((item) => {
                return (
                    <div className={styles.banner}> 
                        <div className={styles.txt}>
                            <h1 className={styles.title}>{item.title} </h1>
                            <p className={styles.paragraph}>{item.paragraph}</p>
                        </div>
                        <button className={styles.button}>{item.button}</button>  
                    <img className={styles.background} src={item.img} alt="" />    
                    </div>

                )
            })}
            
        </div>
    )
}






export default Banner;