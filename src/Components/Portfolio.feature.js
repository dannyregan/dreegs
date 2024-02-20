import React from "react";
import styles from './Portfolio.module.css'

const PortfolioFeature = ({img, title, description, lang1, lang2, lang3}) => {
    return (
        <>
            <div className={styles.project}>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <img src={img}></img>
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <div className={styles.projectTitle}>
                        <h4>{title}</h4>
                    </div>
                    <div className={styles.projectDescription}>
                        <p>{description}</p>
                    </div>
                    <div className={styles.projectLanguages}>
                       {/* well need to make a map function that maps out the languages entered in an array or whatever and spits them all out */}
                       <p className={styles.lang}>{lang1}</p>
                       <p className={styles.lang}>{lang2}</p>
                       <p className={styles.lang}>{lang3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioFeature;