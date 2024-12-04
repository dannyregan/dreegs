import React from "react";
import styles from "./Footer.module.css"
import email from '../images/email logo.png'
import instagram from '../images/instagram logo.png'
import linkedIn from '../images/linkedin logo.webp'
import github from '../images/github logo.png'
import whiteEmail from '../images/whitegmail.png'
import whiteGithub from '../images/github-github-logo-black-symbol-trademark-stencil-label-transparent-png-2846291.png'
import whitelink from '../images/whiteLinkedIn.png'
import whiteInsta from '../images/nohat.png'



export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.ulContainer}>
                <ul>
                    <a href='http://www.github.com/dannyregan' target='_blank'><li><img src={whiteGithub} className={styles.icon}></img></li></a>
                    <a href='http://www.linkedin.com/in/dannyregan' target='_blank'><li><img src={whitelink} className={styles.icon}></img></li></a>
                    <a href='http://www.instagram.com/dannyregan17' target='_blank'><li><img src={whiteInsta} className={styles.icon}></img></li></a>
                    {/* <a><li><img src={whiteEmail} className={styles.icon}></img></li></a> */}
                </ul>
            </div>
            <div>
                <p>Designed and developed by Danny Regan. 2024.</p>
            </div>
        </div>
    )
}