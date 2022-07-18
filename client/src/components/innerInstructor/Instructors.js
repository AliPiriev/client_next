import React from "react";
import styles from "./Instructors.module.scss"; 
import img1 from "../../assets/img/JackJones.png";
import img2 from "../../assets/img/AbdurashidAydar.png";
import img3 from "../../assets/img/ChristianNorman.png";

const Instructors = () => {
    const InstructorData = [{
        id: 0,
        title: "Making sure that our products exceed customer expectations for quality and performance.",
        name: "Jack Jones",
        img: img1
    },

    {
        id: 1,
        title: "We are here to meet your demand and tech the most beneficial way for you in Personal.",
        name: "Abdurashid Aydar",
        img: img2
    },
    {
        id: 2,
        title: "Making sure that our products exceed customer expectations for quality and performance, and we are here to meet your demand and tech the most beneficial way for you in Personal.",
        name: "Christian Norman",
        img: img3
    }];

    return (
        <div className={styles.mainContainer}>
            <h3 className={styles.ttl}>Instructors</h3>
            {InstructorData.map((item) => {
                return (
                    <div key={item.id} className={styles.instructor_list}>
                        <img className={styles.images} src={item.img} alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.Names}>{item.name}</p>
                        </div>
                    </div>
                )  
            })}
        </div>
    )
}




export default Instructors;