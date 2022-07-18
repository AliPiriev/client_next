import React, { useState } from 'react'
import styles from "./TabsTwo.module.scss";
// import full from "../../assets/img/tabImg/100.png"
import Rating from './rating/Rating';
export default function TabsTwo() {
    
const [reviews, setReviews] = useState([
    { id: 1,
      review: "A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.",
      name: "Jack Jones",
      stars: <Rating value={5}/>
    },
    { id: 2,
      review: "Get a lot of bad press, but in my experience customer services has been nothing short of excellent.",
      name: "Alex Clair",
      stars: <Rating value={4}/>
    },
    { id: 3,
      review: "A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.",
      name: "Jack Jones",
      stars: <Rating value={5}/>
    }
  ]);
     
const [stars, setRStars] = useState([
    { id: 1,
      stars: <Rating value={5}/>,
      people: "9 reviews"
    },
    { id: 2,
      stars: <Rating value={4}/>,
      people: "3 reviews"
    },
    { id: 3,
      stars: <Rating value={3}/>,
      people: "3 reviews"
    },
    { id: 4,
      stars: <Rating value={2}/>,
      people: "1 reviews"
    },
    { id: 5,
      stars: <Rating value={1.5}/>,
      people: "1 reviews"
    }
  ]);
    return (
      <div   className={styles.mainReview}>
        <div className={styles.reviewIntro}>
        <h3 className={styles.reviewsTitle}>Reviews</h3>
            {reviews.map(pObj => (
               <div key={pObj.id} className={styles.reviews}>

                 <h3 className={styles.reviewsText}>{pObj.review}</h3>
                <div className={styles.starsReview}>
                <h5 className={styles.name}>{pObj.name}</h5>
                 <h5 className={styles.stars}>{pObj.stars}</h5>
                </div>
                </div>   
            )
            )}
        </div>
        <div className={styles.starsDiv}>
        <h3 className={styles.reviewsTitle}>Course Rates</h3>
        {stars.map(pObj => (
              <div key={pObj.id} className={styles.sumStars}>

                <div className={`${styles.stars}, ${styles.reviewStars}`}>{pObj.stars}</div>
                <div className={styles.numberOfReviews}>{pObj.people}</div>
              </div>
            )
            )}
        </div>
      </div>
    )
  
}