import React from "react";
import resume from "./Resume.module.css";
import styles from "./Nav.module.css";
import pdf from '/Users/getoutdoorsnv/Documents/Documents - DR GON Macbook/Projects/Portfolio-Projects/dreegs/src/images/Resume.Website.dreegs.docx.pdf'

export default function Resume() {
    return (
        <div className={resume.page}>
            <div className={styles.loadIn}><p>Resume.</p></div>
            <embed src={pdf}></embed>
        </div>
    )
}