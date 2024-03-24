import React from "react";
import about from "./About.module.css";
import styles from "./Nav.module.css";
import introduction from "../images/wideIntro.JPG"


export default function AboutMe() {
    return (
        <div className={about.page}>
            <div className={styles.loadIn}><p>About.</p></div>
            <div className={about.filler}></div>
            <div className={about.content}>
                <div className={about.topText}>
                    <h1>Writing code and teaching environmental science to underrepresented youth.</h1>
                </div>
                <img src={introduction} className={about.bannerPics} ></img>
                <div className={about.line}></div>
                <div className={about.aboutInfoContainer}>
                    <div className={about.me}>
                        <div className={about.title}>Me</div>
                            <div className={about.information}>
                                <p className={about.mainPs}>I’m Danny, a software engineer originally from Andover, Massachusetts, now based in Las Vegas, Nevada. I work for an environmental non-profit dedicated to connecting people with the outdoors. My job combines my expertise in biology with my love of the outdoors, which is something I find truly rewarding.</p>
                            </div>
                        <div className={about.title}>My Work</div>
                            <div className={about.information}></div>
                                <p className={about.mainPs}>This work especially brings me joy when working with English Language Learners. Oftentimes, these students are Latino immigrants who have inspired me to learn Spanish. When my students watch me struggle to get my point across in Spanish, they usually laugh, and almost always feel more comfortable around me, knowing that the struggle to learn a new language is mutual.</p>
                        <div className={about.title}>My Code</div>
                        <div className={about.information}></div>
                    </div>
                </div>
                <p className={about.mainPs}>Since beginning my software engineering journey, I’ve felt inclined to enroll in graduate school to study computer science formally and gain a holistic and advanced understanding of CS principles and theory. In doing so, I’m certain I’ll bolster my career as a software engineer, empowering me to drive societal advancement through technological solutions in renewable energy, sustainable development, and environmental conservation, and to continue to improve outdoor accessibility for underrepresented groups.</p>
            </div>
        </div>
    )
}