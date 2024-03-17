import React from "react";
import resume from "./Resume.module.css";
import styles from "./Nav.module.css";

export default function Resume() {
    return (
        <div className={resume.page}>
            <div className={styles.loadIn}><p>Resume.</p></div>
            <h1>This will be the Resume section.</h1>
        </div>
    )
}