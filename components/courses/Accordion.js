import React, { useState } from "react";
import styles from "../../styles/clientScss/Accordion.module.scss";

const Data = [
    {
        question: "Welcome",
        answer1: "Intro",
        answer2: "Focusing attention and guiding the user",
        answer3: "Creating emotion and showcasing personality and brand",
        answer4: "Informing and giving feedback to the user",
    },
    {
        question: "Best Practices",
        answer1: "Intro",
        answer2: "Focusing attention and guiding the user",
        answer3: "Creating emotion and showcasing personality and brand",
        answer4: "Informing and giving feedback to the user",
    },
    {
        question: "Lottie",
        answer1: "Intro",
        answer2: "Focusing attention and guiding the user",
        answer3: "Creating emotion and showcasing personality and brand",
        answer4: "Informing and giving feedback to the user",
    },
    {
        question: "Conclusion",
        answer1: "Intro",
        answer2: "Focusing attention and guiding the user",
        answer3: "Creating emotion and showcasing personality and brand",
        answer4: "Informing and giving feedback to the user",
    },
]

const Accordion = () => {
    const [clicked, setClicked] = useState(false);
    const toggle = (index) => {
        if (clicked === index) {
            setClicked(null)
        } else {
            setClicked(index)
        }
    }

    return (
        <div className={styles.Accordion}>
            <div className={styles.container}>
                <div>
                    <h3 className={styles.title}>Course Table of contents</h3>
                </div>
                {Data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div onClick={() => {toggle(index)}} className={styles.wrap}>
                                <h4 className={styles.h1}>{item.question}</h4>
                                <div className={`${styles.toggle} ${clicked === index ? styles.active : '' }`}>
                                    <span></span>
                                    <span></span> 
                                </div>
                            </div>
                            {clicked === index ? (
                                <div className={styles.dropdown}>
                                    <div className={styles.list}>
                                        <div className={styles.elipse}></div>
                                        <p className={styles.paragraph}>{item.answer1}</p>
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.elipse}></div>
                                        <p className={styles.paragraph}>{item.answer2}</p>
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.elipse}></div>
                                        <p className={styles.paragraph}>{item.answer3}</p>
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.elipse}></div>
                                        <p className={styles.paragraph}>{item.answer4}</p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Accordion;