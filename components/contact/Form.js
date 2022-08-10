import React, { useState } from "react";
import styles from "../../styles/contactScss/Form.module.scss";
import Select from 'react-select'

const difficulty = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advance', label: 'Advance' },
    { value: 'pro', label: 'Pro' }
 ];

const Form = () => { 
    const [dificult, setDificult] = useState('');

    return (
        <div className={styles.box}>
            <form>
                <div className={styles.contact2}>
                    <label className={styles.movelabl}>name</label>
                    <input type='text' placeholder='Enter'  />
                </div>
                <div className={styles.contact2}>
                    <label className={styles.movelabl}>e-mail</label>
                    <input type='text' placeholder  ='Enter' />
                </div> 
                <div className={styles.container3}>
                    <div className="input-wrap">
                            <label className={styles.lbl}>subject</label>
                            <Select
                            options={difficulty}
                            placeholder='Choose'
                            className="select "
                            classNamePrefix="select"
                             menuColor='red'
                            onChange={(e) => setDificult(e)} />
                    </div>
                </div>
                <div className={`${styles.msgBox} ${styles.contact2}`}>
                    <label className={styles.movelabl}>Message</label>
                    <input className={styles.input2} type='text' placeholder='Message text...' />
                </div>
                <div className={styles.btn}>
                    <button className="blue-btn">Send message</button>
                </div>
            </form>
       </div>
    )
};

export default Form;