import React from 'react'
import styles from "../../styles/clientScss/QaReply.module.scss";

function QaReply({ closeContent }) {
  return (
    <div className={styles.QaReplyBackground}>
        <div className={styles.QaReplyContainer}>
            <div className={styles.QaReplyBody}>
                <div>
                    <img className={styles.QaReplyImg} src="/img/tabImg/userReply.png" alt="" />
                </div>
                <input className={styles.QaReplyInput} placeholder="enter" />
            </div>
            <div className={styles.QaReplyFooter}>
                <div className={styles.replyBtn}>
                <button className="blue-btn">Reply Now</button>
                </div>
                <button className={styles.cancelBtn}  onClick={() => {
                    closeContent(false);
                }}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default QaReply