import { useState } from "react";
import styles from "../../styles/instructorScss/Instructors.module.scss"; 
import CornerDecor from "../courses/border/CornerDecor";
import BgImage from '../../components/UI/BgImage';


const Instructors = () => {
    const [active, setActive] = useState(null);


    const InstructorData = [{
        id: 0,
        text: "Making sure that our products exceed customer expectations for quality and performance.",
        name: "Jack Jones",
        img: "/img/instructorImgs/JackJones.png"
    },

    {
        id: 1,
        text: "We are here to meet your demand and tech the most beneficial way for you in Personal.",
        name: "Abdurashid Aydar",
        img: "/img/instructorImgs/AbdurashidAydar.png"
    },
    {
        id: 2,
        text: "Making sure that our products exceed customer expectations for quality and performance, and we are here to meet your demand and tech the most beneficial way for you in Personal.",
        name: "Christian Norman",
        img: "/img/instructorImgs/ChristianNorman.png"
    }];
      return (
        <div>
          <div className="darkImg"><BgImage id={9} /></div>
          <div className="lightImg"><BgImage id={91} /></div>
        <div className={`${styles.mainContainer} textStyles`}>
          <div className={styles.insTitlhed}>
            <h1 className={styles.ttl}>Instructors</h1>
          </div>
          {/* <div className={styles.bgImgInst}>
              <img className={`${styles.instBgImg} ${styles.bghdins}`} src="img/instructorImgs/bgHeIns.png" alt="" />
              <img className={`${styles.instBgImg} ${styles.bg}`} src="img/instructorImgs/bgInstImg.png" />
            </div> */}
              <div className={`${'container'} ${styles.containertow}`}>
                {InstructorData.map((item) => {
               return (
                  <div key={item.id} className={styles.instructor_list}>
                     <CornerDecor />   
                      <div className={styles.img_container}>
                       <img className="img-absolute" src={item.img} alt="" />
                      </div>
                      <div className={styles.text}>
                         <h3 className={styles.Names}>{item.name}</h3>
                         <p className={`textStyles ${styles.txt}`}>{item.text}</p>
                     </div>
                 </div>
                )})}
              </div>
        </div>
        </div>
     )
  }






export default Instructors;