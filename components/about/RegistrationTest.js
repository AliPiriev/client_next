import styles from '../../styles/about/Items.module.scss';
import { useState } from 'react';
const RegistrationTest = () => {
    const [close, setClose] = useState(false);

    return (
        <div className={`${styles.registration__modal} ${close ? styles.none : ''}`}>
            <dialog open>
                <div className={`${styles.inner} ${'textStyles'}`}>
                    <div className={styles.modal__header}>
                        <h3>Registration</h3>
                        <svg onClick={() => {
                            setClose(true);
                        }} width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17.0488" r="16" stroke="#E5E5E5" strokeWidth="2"/>
                            <path d="M21.5342 12.5156L12.4675 21.5823" stroke="#00050F" strokeWidth="2"/>
                            <path d="M12.4658 12.5156L21.5325 21.5823" stroke="#00050F" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={styles.modal__item}>
                        <p className={styles.item__title}>Wallet address</p>
                        <input className={styles.input} placeholder='Enter' />
                    </div>
                    <div className={styles.modal__item}>
                        <p className={styles.item__title}>User Name</p>
                        <input className={styles.input} placeholder='Enter' />
                    </div>
                    <div className={styles.modal__item}>
                        <p className={styles.item__title}>e-mail</p>
                        <input className={styles.input} placeholder='Enter' />
                    </div>
                    <div className={styles.checkBox}>
                        <div className="test-input">
                            <label className="mainBox">
                                <p>By signing up, you agree to <span>Terms of Service and Privacy Policy.</span></p>
                                <input type="checkbox"/>
                                <span className="geekmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.btns__outer}>
                        <div className={styles.btn}>
                            <button className="blue-btn">Register</button>
                        </div>
                        <div className={styles.btn__cancel}>
                            <button onClick={() => {
                                setClose(true);
                            }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default RegistrationTest;