import React from 'react';
import styles from './Menu.module.css'

export default function MenuBar() {
    return (
        <>
            <div className={styles.menuContainer}>
                <a href='#About Me' ><div className={styles.menuBars}></div></a>
                
                <a><div className={styles.menuBars}></div></a>
                
                <a><div className={styles.menuBars}></div></a>
            </div>
        </>
    )
}