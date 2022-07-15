import React, { useState } from 'react'
import styles from "./Qa.module.scss";
import Rating from './rating/Rating';
import vector from "../../assets/img/tabImg/Vector.png";
import Popup from './Popup';
import QaReply from './QaReply';

export default function Qa() {
const [reviews, setReviews] = useState([
    { id: 1,
      review: "A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.",
      people: "Jack Jones",
      vector: <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8716 5.17968C10.4506 3.71781 8.41998 2.95011 5.8329 2.89743V0.289222C5.8329 0.172272 5.76173 0.0663233 5.65265 0.0217435C5.54356 -0.0222572 5.41873 0.0014799 5.33531 0.0842708L0.0853125 5.29489C-0.0284375 5.40779 -0.0284375 5.59131 0.0853125 5.70421L5.33531 10.9148C5.41873 10.9982 5.54473 11.0231 5.65323 10.9774C5.76231 10.9328 5.83348 10.8268 5.83348 10.7099V8.10688C11.6942 8.19141 13.4436 10.8361 13.4606 10.8621C13.5148 10.949 13.6093 10.9994 13.7085 10.9994C13.733 10.9994 13.7581 10.9959 13.7831 10.9895C13.9074 10.9565 13.9955 10.8477 14.0001 10.7197C14.0042 10.5889 14.0911 7.46366 11.8716 5.17968Z" fill="white"/>
      </svg>,
      reply: "Reply"
    }
  ]);
  
  const [openPopup, setOpenPopup] = useState(false);

  const [changeContent, setChangeContent] = useState(false);
     
    return (
      <div className={styles.mainReview}>
        <div className={styles.reviewIntro}>
        <h3 className={styles.reviewsTitle}>Questions and Answers</h3>
            {reviews.map(pObj => (
               <div className={styles.reviews}>
                 <h3 className={styles.reviewsText} key={pObj.id}>{pObj.review}</h3>
                 <div className={styles.replyDiv}>
                 <h5 className={`${styles.starsReview}, ${styles.name}`} key={pObj.id}>{pObj.people}</h5>
                    <button className={styles.replyFlex} onClick={() => {
                      setChangeContent(true);
                    }}>
                      
                    <h5 className={styles.name} key={pObj.id}>{pObj.vector}</h5>
                    <h5 className={styles.stars} key={pObj.id}>{pObj.reply}</h5>
                    </button>
                </div>
                {changeContent && <QaReply closeContent={setChangeContent} />}
               <div className={changeContent ? styles.closed : '        '}>
               <h3 className={styles.reviewsTitle}>Leave your comment or question</h3>
                <input className={styles.input} type="text" placeholder="Enter text here"></input>
                <button className={styles.question} onClick={() => {
                    setOpenPopup(true);
                }}
                >Question/Comment</button>
                </div>
                </div>      
            )
            
            )}
             {openPopup && <Popup closePopup={setOpenPopup} />}
            

        </div>

      </div>
    )
  
}

