import React from "react";

import styles from "./Button.module.css";

export default function Button({ href, text }) {
    return (
        <a href={href} className={styles.buttonLink}>
            {text}
        </a>
    );
}
