import React from "react";
import styles from "./From.module.scss";
import {
    Menu,
    MenuItem,
    MenuButton
} 
from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


const From = () => { 
    return (
        <div className={styles.box}>
            <form>
                <div className={styles.contact2}>
                    <p>name</p>
                    <input type='text' placeholder='Enter'  />
                </div>
                <div className={styles.contact2}>
                    <p>e-mail</p>
                    <input type='text' placeholder='Enter' />
                </div> 
                <div className={styles.container3}>
                    <p>subject</p>
                     <div className={styles.subjectMenu}> 
                        <Menu 
                            menuButton={<MenuButton className={styles.slct} >
                              Choose
                                    <svg className={styles.selectSvg} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L8 7L15 1" stroke="#969BA6" strokeWidth="2"/>
                                    </svg>
                                </MenuButton>} transition>
                                    <MenuItem className={styles.menuItem}>sdasd </MenuItem> 
                                    <MenuItem className={styles.menuItem}>hello</MenuItem>
                          </Menu>
                     </div>
                </div>
                <div className={`${styles.msgBox} ${styles.contact2}`}>
                    <p>Message</p>
                    <input className={styles.input2} type='text' placeholder='Message text...' />
                </div>
                <div>
                    <button className={styles.btn}>Send message</button>
                </div>
            </form>
       </div>
    )
};

export default From;