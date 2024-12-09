import React from "react";
import styles from './Portfolio.module.css'

const PortfolioFeature = ({ img, title, description, languages, href }) => {
    return (
        <a href={href} target="_blank">
            <div className={styles.project}>
                <div className={styles.imageContainer}>
                    <a className={styles.image}>
                        <img src={img}></img>
                    </a>
                </div>
                <div className={styles.projectInfo}>
                    <div className={styles.projectTitle}>
                        <h4>{title}</h4>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.projectDescription}>
                        <p>{description}</p>
                    </div>
                    <div className={styles.projectLanguages}>
                        {Array.isArray(languages) &&
                            languages.map((lang, index) => (
                                <p key={index} className={styles.lang}>{lang}</p>
                            ))}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default PortfolioFeature;