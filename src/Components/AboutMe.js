import React from "react";
import about from "./About.module.css";
import styles from "./Nav.module.css";

export default function AboutMe() {
    return (
        <div className={about.page}>
            <div className={styles.loadIn}><p>About.</p></div>
            <h1>This will be the About section.</h1>
        </div>
    )
}