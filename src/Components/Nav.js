import React, {useState, useEffect} from "react";
import styles from './Nav.module.css';
// import hero3 from '../images/Hero 3.JPG';

export default function Nav() {
    return (
        <>
            {/* <div className={styles.bannerContainer}> */}
                {/* <div className={styles.loadIn}><p>Hi, I'm Danny.</p></div> */}
                {/* <div className={styles.bannerImg}>
                    <img src={hero3} alt='Danny Regan'></img>
                </div> */}
                <div className={styles.nav}>
                    <div className={styles.navDivLeft}>
                        <a href='/Home'><p className={styles.initials}>DR</p></a>
                    </div>
                    <div className={styles.navDivCenter}>
                        <p>This website is currently under construction.</p>
                    </div>
                    <div className={styles.navDivRight}>
                        <ul className={styles.navTabs}>
                            <CustomLink href='/Portfolio'>Portfolio</CustomLink>
                            <CustomLink href='/AboutMe'>About</CustomLink>
                            <CustomLink href='/Resume'>Resume</CustomLink>
                            {/* <a href='/Portfolio'><li>Portfolio</li></a>
                            <a href='/AboutMe'><li>About</li></a>
                            <a href="/Resume"><li>Resume</li></a> */}
                        </ul>
                    </div>
                </div>
                {/* <div className={styles.dannyRegan}>
                     <div className={styles.frontEnd}>
                        <div className={styles.qualitiesContent}>
                            <ol>
                                <li><span>A Rock Climber,</span></li>
                                <li><span>Cyclist,</span></li>
                                <li><span>Runner,</span></li>
                                <li><span>Photographer,</span></li>
                                <li><span>Biologist,</span></li>
                                <li><span>Gamer,</span></li>
                                <li><span>Cofee-lover,</span></li>
                                <li><span>Meditator,</span></li>
                                <li><span>Guitarist,</span></li>
                                <li><span>Adventurist,</span></li>
                                <li><span>Hiker,</span></li>
                                <li><span>Friend,</span></li>
                                <li><span>Teammate,</span></li>
                                <li><span>Problem Solver,</span></li>
                                <li><span>Front End Developer.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>     
                <div className={styles.letsWork}>
                    <p>Let's work together.</p>
                </div>
                <div className={styles.nameContainer}>
                    <div className={styles.nameInner} style={{'--marquee-speed': '20s', '--direction': 'scroll-left'}} role='marquee'>
                        <div className={styles.nameText}>
                            <h1 className={styles.scrollingName}>Danny Regan</h1>
                            <h1 className={styles.scrollingName}><span className={styles.spacer}>—</span></h1>
                        </div>
                        <div className={styles.nameText}>
                            <h1 className={styles.scrollingName}>Danny Regan</h1>
                            <h1 className={styles.scrollingName}><span className={styles.spacer}>—</span></h1>
                        </div>
                        <div className={styles.nameText}>
                            <h1 className={styles.scrollingName}>Danny Regan</h1>
                            <h1 className={styles.scrollingName}><span className={styles.spacer}>—</span></h1>
                        </div> 
                    </div>
                </div> */}
            {/* </div> */}
        </>
    )
}

function CustomLink({href, children, ...props}) {
    const path = window.location.path;
    return (
        <a href={href} className={path === href ? "active" : ""}><li>{children}</li></a>
    )
}