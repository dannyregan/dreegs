import React from "react";
import styles from './Portfolio.module.css'
import PortfolioFeature from "./Portfolio.feature.js";
import proj1 from '../images/editShorter.jpg'
import style from "./Nav.module.css";

const Portfolio = () => {
    return (
      
        <div className={styles.portfolioSection}>
            <div className={style.loadIn}><p>Portfolio.</p></div>
            <h1>This section is under construction.</h1>

            {/* <div className={styles.portfolioSection}>
            <div className={style.loadIn}><p>Portfolio.</p></div>
                <div className={styles.portfolio}>
                    <h1>Portfolio</h1>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.allFeaturedProjects}>
                    <div className={styles.featuredProjectsHeader}>
                        <h3>Featured Projects</h3>
                    </div>
                    <PortfolioFeature img={proj1} title='Project Title' description='this is the whole ass description and all' lang1='CSS' lang2='JS' lang3='HTML'/>
                </div>
            </div> */}
        </div>
    )
}

export default Portfolio;