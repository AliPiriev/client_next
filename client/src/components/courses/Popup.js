import React from 'react'
import styles from "./Popup.module.scss";

function Popup({ closePopup }) {
  return (
    <div className={styles.popupBackground}>
        <div className={styles.popupContainer}>
           <div className={styles.titleCloseBtn}>
           <div className={styles.popupTitle}>
                <h1 className={styles.popupH1}>Course Review</h1>
            </div>
           <button className={styles.closeBtn} onClick={() => {
            closePopup(false);
        }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5342 1.46655L1.46751 10.5332" stroke="#00050F" strokeWidth="2"/>
        <path d="M1.46582 1.46655L10.5325 10.5332" stroke="#00050F" strokeWidth="2"/>
        </svg>
        </button>
           </div>
            <div className={styles.popupBody}>
                <p className={styles.popupP}>write your review</p>
                <input className={styles.popupInput} placeholder="enter" />
                <div className={styles.checkbox}>
                </div>
            </div>
            <div className={styles.popupFooter}>
                <button className={styles.submitBtn}>Submit review</button>
                <button className={styles.cancelBtn}  onClick={() => {
                    closePopup(false);
                }}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Popup