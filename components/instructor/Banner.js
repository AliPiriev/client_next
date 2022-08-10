import React from "react";
// import img1 from "/img/instructorImgs/backgroundBanner.png";
import styles from "../../styles/instructorScss/Banner.module.scss"; 

const Banner = () => {

    const smallData = [{
        id: 1,
        title: "Check yourself in the quiz",
        paragraph: "10 questions  •  10 min",
        button: "Start Quiz Now",
        img: "/img/instructorImgs/backgroundBanner.png"
    }];

    return (
        <div className={styles.container}>
            {smallData.map((item, index) => {
                return (
                    <div key={item.id} className={styles.banner}> 
                        <img className="main-bg-img" src={item.img} alt="" />    
                        <div className={styles.txt}>
                            <h3 className={styles.title}>{item.title} </h3>
                            <p className={styles.paragraph}>{item.paragraph}</p>
                            <button className="orange-border-btn">{item.button}</button>  
                        </div>                    
                    </div>

                )
            })}
            
        </div>
    )
}

export default Banner;