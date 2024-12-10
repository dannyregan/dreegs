import React from "react";
import styles from './Portfolio.module.css'
import PortfolioFeature from "./Portfolio.feature.js";
import style from "./Nav.module.css";

import leagueMe from "../images/league.me.png"
import musicLibrary from "../images/music-library_.png"
import todaysToDos from "../images/todays-to-dos.png"
import bankingSimulator from "../images/bank-simulator.png"

const Portfolio = () => {
    return (
      
        <div className={styles.portfolioSection}>
            <div className={style.loadIn}><p>Portfolio.</p></div>
            <div className={styles.filler}></div>
                <div className={styles.allFeaturedProjects}>
                    <div className={styles.featuredProjectsHeader}>
                        <h1>Featured Projects</h1>
                    </div>
                    <div className={styles.singleProject}>
                        <PortfolioFeature 
                            img={leagueMe} 
                            title='Sports League Manager' 
                            description="A full-stack web app for creating, managing, and following pick-up sports leagues. Users can create leagues, manage teams and players, input game scores, and track performance stats with dynamic, real-time data handling. Whether you're organizing a casual game or building a competitive league, this app keeps everyone in the loop and the competition fierce." 
                            languages={["TypeScript", "JavaScript", "React.js", "Node.js", "MongoDB", "EJS"]}
                            href="https://github.com/dannyregan/league-manager"
                            />
                    </div>
                    <PortfolioFeature 
                        img={bankingSimulator} 
                        title='Banking Simulator' 
                        description="A terminal-based banking application with secure account creation, randomized account numbers, and PINs. Users can perform transactions like deposits, withdrawals, and transfers with robust error handling and PIN protection." 
                        languages={["Python"]}
                        href="https://github.com/dannyregan/banking-app"
                        />
                    <PortfolioFeature 
                        img={todaysToDos} 
                        title="Today's To-Dos"
                        description="A dynamic, reactive to-do list app that helps you stay on top of your game by tracking everything you need to accomplish." 
                        languages={["JavaScript", "React.js", "HTML", "CSS"]}
                        href="https://github.com/dannyregan/todays-todos"
                        />
                </div>
                <div className={styles.allFeaturedProjects}>
                    <div className={styles.featuredProjectsHeader}>
                        <h1>Other Projects</h1>
                    </div>
                    <PortfolioFeature 
                        img={musicLibrary} 
                        title="Music Library"
                        description="A music management app that allows users to simulate and organize a music library. Add and manage users and songs, update song details, delete tracks, and switch between accounts—all through a convenient terminal navigation tool." 
                        languages={["Python"]}
                        href="https://github.com/dannyregan/music-library"
                        />
                </div>
        </div>
    )
}

export default Portfolio;