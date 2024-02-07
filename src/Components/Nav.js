import React from "react";
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div>
                <p>Danny Regan</p>
            </div>
            <div className={styles.navDivRight}>
                <ul className={styles.navTabs}>
                    <a href="#"><li>About Me</li></a>
                    <a href="#"><li>Projects</li></a>
                    <a href="#"><li>Resume</li></a>
                    <a href="#"><li>Blog</li></a>
                </ul>
            </div>
        </div>
    )
}