import React, { useState, useEffect } from "react";

import about from "./About.module.css";
import styles from "./Nav.module.css";
import introduction from "../images/wideIntro-optimized.jpg"
import introductionForMobile from "../images/introduction.JPG"
import me from "../images/meAndZ-optimized.jpg"
import myWork from "../images/lookingAtRocks-optimized.jpg"
import myCode from "../images/Hero-mini-resized.jpg"
import joel from "../images/jl-optimized.jpg"
import cheresa from "../images/Cheresa-Taing-circle-optimized.jpg"


export default function AboutMe() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? 1 : 0
      );
    }, 12000);

    return () => clearInterval(intervalId);
  }, []);
      
    return (
        <div className={about.page}>
            <div className={styles.loadIn}><p>About.</p></div>
            <div className={about.filler}></div>
            <div className={about.content}>
                <div className={about.topText}>
                    <h1>Building value, one commit at a time.</h1>
                </div>
                <div className={about.bannerImgContainer}>
                    <img src={introduction} className={about.bannerPics} ></img>
                </div>
                <div className={about.bannerImgContainerMobile}>
                    <img src={introductionForMobile} className={about.bannerPicsMobile} ></img>
                    <p>Roslyn and I teaching students at Lake Mead National Recreation Area.</p>
                </div>
                {/* <div className={about.scrollMobile}>
                    <p>S</p>
                    <p>C</p>
                    <p>R</p>
                    <p>O</p>
                    <p>L</p>
                    <p>L</p>
                </div> */}
               
                <div className={about.line}></div>
                <div className={about.aboutInfoContainer}>
                    <div className={about.me}>
                        <div className={about.infoSection}>
                            <h2 className={about.title}>Me</h2>
                                <div className={about.information}>
                                    <img src={me} alt='Danny Regan and two dogs.' className={about.threePics}/>
                                    <div className={about.overlay}></div>
                                    <p className={about.mainPs}>I’m Danny, a computer science master’s student from Andover, Massachusetts. My journey has taken me from Manhattan to Las Vegas, to Spain, and back. I thrive on adventure, whether it's exploring new cities or solving tech problems. To me, the tech world is the ultimate adventure—where creativity and growth come together in everything I build.</p>
                                </div>
                        </div>
                        <div className={about.infoSection}>
                            <h2 className={about.title}>My Work</h2>
                                <div className={about.information}>
                                    <img src={myWork} alt='Danny Regan and two dogs.' className={about.threePics}/>
                                    <div className={about.overlay}></div>
                                        <p className={about.mainPs}>I've worked closely with English Language Learners for over two years, and they've inspired me to learn Spanish. When the opportunity arose, I moved to Spain for a year to teach while earning my master’s. Watching me struggle with Spanish often makes my students laugh, but it also helps them feel more comfortable, knowing the challenge of learning a new language is mutual.</p>
                                </div>
                        </div>
                        <div className={about.infoSection}>
                            <h2 className={about.title}>My Code</h2>
                                <div className={about.information}>
                                <img src={myCode} alt='Danny Regan and two dogs.' className={about.threePics}/>
                                    <div className={about.overlay}></div>
                                        <p className={about.mainPs}>As a master’s student, I’m hands-on with a variety of languages and frameworks like Python, JavaScript, HTML, CSS, TypeScript, and React, building and experimenting with everything from complex algorithms to full-stack web apps. I’m always looking for new challenges to solve and projects to build, refining my skills along the way.</p>
                                </div>

                        </div>
                    </div>
                    <div className={about.testimonialsSection}>
                        <div className={`${about.testimonial} ${currentTestimonialIndex === 0 ? about.active : ""}`}>
                            <img src={joel} alt="Joel Leo Emerson" />
                            <div className={about.testimonialInfo}>
                                <p className={about.quote}>"Danny is as good as they come. Intrinsically and pro-socially motivated, he is a force for good in the world, curious, creative, good humored, yet humble and emotionally mature. He has always ranked among my most impressive students for all these positive traits (of the 1600 and counting students I have had in classrooms over the years)."</p>
                                <p className={about.name}>Joel Leo Emerson</p>
                                <p className={about.relationship}>Teacher</p>
                            </div>
                        </div>
                        <div className={`${about.testimonial} ${currentTestimonialIndex === 1 ? about.active : ""}`}>
                            <img src={cheresa} alt="Cheresa Taing" />
                            <div className={about.testimonialInfo}>
                                <p className={about.quote}>"What sets Daniel apart is his drive and dedication to problem-solving and program accessibility, which have greatly benefited our organization and the communities we serve. Daniel's passion for computer science is evident in his program management approach. He consistently seeks opportunities for growth and has impressed us with his ability to excel in diverse and challenging environments."</p>
                                <p className={about.name}>Cheresa Taing</p>
                                <p className={about.relationship}>Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
