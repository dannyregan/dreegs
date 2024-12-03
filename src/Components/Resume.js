import React from "react";
import resume from "./Resume.module.css";
import styles from "./Nav.module.css";
// import pdf from "../../public/daniel-regan-resume.pdf"

export default function Resume() {
    return (
        <div className={resume.page}>
             <div className={styles.loadIn}><p>Resume.</p></div>
            <object data="/daniel-regan-resume.pdf" type="application/pdf" width="70%" height="600px">
                <p>Your browser does not support PDFs. Please <a href="/daniel-regan-resume.pdf">download the PDF</a>.</p>
            </object>
            {/* <div className={styles.loadIn}><p>Resume.</p></div>
            <embed src="public/daniel-regan-resume.pdf"></embed> */}
        </div>


    )
}