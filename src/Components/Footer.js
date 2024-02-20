import React from "react";
import styles from "./Footer.module.css"
import email from '../images/email logo.png'
import instagram from '../images/instagram logo.png'
import linkedIn from '../images/linkedin logo.webp'
import github from '../images/github logo.png'


export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.ulContainer}>
                <ul>
                    <a href='http://www.github.com/dannyregan' target='_blank'><li><img src={github} className={styles.icon}></img></li></a>
                    <a href='http://www.linkedin.com/in/dannyregan' target='_blank'><li><img src={linkedIn} className={styles.icon}></img></li></a>
                    <a href='http://www.instagram.com/dannyregan17' target='_blank'><li><img src={instagram} className={styles.icon}></img></li></a>
                    <a><li><img src={email} className={styles.icon}></img></li></a>
                </ul>
            </div>
            <div>
                <p>This website was designed and created entirely by Danny Regan.</p>
            </div>
        </div>
    )
}