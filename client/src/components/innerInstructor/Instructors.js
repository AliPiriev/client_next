import React from "react";
import styles from "./Instructors.module.scss"; 
import img1 from "../../assets/img/JackJones.png";
import img2 from "../../assets/img/AbdurashidAydar.png";
import img3 from "../../assets/img/ChristianNorman.png";

const Instructors = () => {
    const InstructorData = [{
<<<<<<< HEAD
        id: 0,
=======
        id: 1,
>>>>>>> fdbcbc19487d6d3aff2628ee939b1c8ec76b475a
        title: "Making sure that our products exceed customer expectations for quality and performance.",
        name: "Jack Jones",
        img: img1
    },
<<<<<<< HEAD
        {
        id: 1,
=======
    {
        id: 2,
>>>>>>> fdbcbc19487d6d3aff2628ee939b1c8ec76b475a
        title: "We are here to meet your demand and tech the most beneficial way for you in Personal.",
        name: "Abdurashid Aydar",
        img: img2
    },
<<<<<<< HEAD
        {
        id: 2,
=======
    {
        id: 3,
>>>>>>> fdbcbc19487d6d3aff2628ee939b1c8ec76b475a
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
            <div className={styles.greenBanner}>
                <h5 className={styles.subTtl}>Become a Instructor</h5>
                <p className={styles.txt}>Teach what you love. Corrector gives you the tools to create a course.</p>
                <a href="/"className={styles.btn}>Start Teaching</a>
            </div>
        </div>
    )
}




export default Instructors;