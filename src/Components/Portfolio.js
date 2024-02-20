import React from "react";
import styles from './Portfolio.module.css'
import PortfolioFeature from "./Portfolio.feature.js";
import proj1 from '../images/editShorter.jpg'

const Portfolio = () => {
    return (
        <>
            <div className={styles.portfolioSection}>
                <div className={styles.portfolio}>
                    <h2 id='portfolio'>Portfolio</h2>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.allFeaturedProjects}>
                    <div className={styles.featuredProjectsHeader}>
                        <h3>Featured Projects</h3>
                    </div>
                    <PortfolioFeature img={proj1} title='Project Title' description='this is the whole ass description and all' lang1='CSS' lang2='JS' lang3='HTML'/>
                </div>
            </div>
        </>
    )
}

export default Portfolio;