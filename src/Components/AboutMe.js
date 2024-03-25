import React from "react";
import about from "./About.module.css";
import styles from "./Nav.module.css";
import introduction from "../images/wideIntro.JPG"
import me from "../images/meAndZ.JPG"
import myWork from "../images/lookingAtRocks.JPG"
import myCode from '../images/Hero 3.JPG'


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
                        <div className={about.infoSection}>
                            <h2 className={about.title}>Me</h2>
                                <div className={about.information}>
                                    <img src={me} alt='Danny Regan and two dogs.' className={about.threePics}/>
                                    <div className={about.overlay}></div>
                                    <p className={about.mainPs}>I’m Danny, a software engineer originally from Andover, Massachusetts. Now, I'm based in Las Vegas, Nevada and I work for an environmental non-profit dedicated to connecting people with the outdoors. My job combines my expertise in biology with my love of the outdoors, which is something I find truly rewarding.</p>
                                </div>
                        </div>
                        <div className={about.infoSection}>
                            <h2 className={about.title}>My Work</h2>
                                <div className={about.information}>
                                    <img src={myWork} alt='Danny Regan and two dogs.' className={about.threePics}/>
                                    <div className={about.overlay}></div>
                                        <p className={about.mainPs}>I often work with English Language Learners, many of whom are Latino immigrants, who have inspired me to learn Spanish. When my students watch me struggle with my Spanish, they usually laugh, and almost always feel more comfortable around me, knowing that the struggle to learn a new language is mutual.</p>
                                </div>
                        </div>
                        <div className={about.infoSection}>
                            <h2 className={about.title}>My Code</h2>
                                <div className={about.information}>
                                <img src={myCode} alt='Danny Regan and two dogs.' className={about.threePics}/>
                                    <div className={about.overlay}></div>
                                        <p className={about.mainPs}>I aspire to study computer science to gain a holistic and advanced understanding of CS principles and theory. In doing so, I’ll bolster my career as a software engineer, empowering me to drive advancements in sustainable development and environmental conservation, and to improve outdoor accessibility for underrepresented groups.</p>
                                </div>

                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}