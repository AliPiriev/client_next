import React from 'react'
import styles from "./QaReply.module.scss";
import userReply from "../../assets/img/tabImg/userReply.png";

function QaReply({ closeContent }) {
    
  return (
    <div className={styles.QaReplyBackground}>
        <div className={styles.QaReplyContainer}>
            <div className={styles.QaReplyBody}>
                <div>
                    <img className={styles.QaReplyImg} src={userReply} alt="" />
                </div>
                <input className={styles.QaReplyInput} placeholder="enter" />
            </div>
            <div className={styles.QaReplyFooter}>
                <button className={styles.submitBtn}>Reply Now</button>
                <button className={styles.cancelBtn}  onClick={() => {
                    closeContent(false);
                }}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default QaReply