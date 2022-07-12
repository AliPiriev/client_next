import React, {useState} from "react";
import plus from "../../assets/img/accordion/plus.png"
import minus from "../../assets/img/accordion/minus.png"
import elipse from "../../assets/img/accordion/Ellipse.png";
import styles from "./Accordion.module.css";

const Data = [
    {
    question: "Welcome",
    answer1:"Intro",
    answer2:"Focusing attention and guiding the user",
    answer3:"Creating emotion and showcasing personality and brand",
    answer4:"Informing and giving feedback to the user",
    },
    {
    question: "Best Practices",
    answer1:"Intro",
    answer2:"Focusing attention and guiding the user",
    answer3:"Creating emotion and showcasing personality and brand",
    answer4:"Informing and giving feedback to the user",
    },
    {
    question: "Lottie",
    answer1:"Intro",
    answer2:"Focusing attention and guiding the user",
    answer3:"Creating emotion and showcasing personality and brand",
    answer4:"Informing and giving feedback to the user",
    },
    {
    question: "Conclusion",
    answer1:"Intro",
    answer2:"Focusing attention and guiding the user",
    answer3:"Creating emotion and showcasing personality and brand",
    answer4:"Informing and giving feedback to the user",
    },
]

const Accordion = () => {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return(
        <div className={styles.Accordion}>
           <div className={styles.container}>
           <div>
                <h1 className={styles.title}>Course Table of contents</h1>
            </div>
            {Data.map((item, index) => {
                    return(
                        <>
                       
                        <div onClick={() => toggle(index)} key={index} className={styles.wrap}>
                        <h1 className={styles.h1}>{item.question}</h1>
                        <span className={styles.span}>{clicked === index ? <img src={minus} /> : <img src={plus} />}</span>
                        </div>
                        {clicked === index ? (
                             <div className={styles.dropdown}>
                                <div className={styles.list}>
                                    <img src={elipse} alt="" />
                                    <p className={styles.paragraph}>{item.answer1}</p>
                                </div>
                                <div className={styles.list}>
                                    <img src={elipse} alt="" />
                                    <p className={styles.paragraph}>{item.answer2}</p>                                </div>
                                <div className={styles.list}>
                                    <img src={elipse} alt="" />
                                    <p className={styles.paragraph}>{item.answer3}</p>
                                </div>
                                <div className={styles.list}>
                                    <img src={elipse} alt="" />
                                    <p className={styles.paragraph}>{item.answer4}</p>
                                </div>                                 
                             </div>
                        ) : null} 
                        </>
                    )
                })}
           </div>
        </div>
    )
}

export default Accordion;