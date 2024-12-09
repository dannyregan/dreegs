import React from "react";
import resume from "./Resume.module.css";
import styles from "./Nav.module.css";

export default function Resume() {
    return (
        <div className={resume.page}>
             <div className={styles.loadIn}><p>Resume.</p></div>
            <object data="/daniel-regan-resume.pdf" type="application/pdf" >
            <div className={resume.error}>
                <p>
                    Your browser does not support PDFs.
                </p>
                <a href="/daniel-regan-resume.pdf">Download the PDF</a>
            </div>
            </object>
        </div>
    )
}