import React, { useState, useEffect } from "react";
import about from "./About.module.css";
import styles from "./Nav.module.css";
import introduction from "../images/wideIntro.JPG"
import introductionForMobile from "../images/introduction.JPG"
import me from "../images/meAndZ.JPG"
import myWork from "../images/lookingAtRocks.JPG"
import myCode from '../images/Hero 3.JPG'
import joel from "../images/jl.jpg"
import cheresa from "../images/Cheresa-Taing-circle.jpeg"
import alex from "../images/Alex.jpg"
import bob from "../images/bobAndMark.JPG"
import collin from '../images/collin.JPG'
import goldenNugget from "../images/goldenNugget.JPG"
import grandCanyon from "../images/grandCanyonSunset.jpg"
import nightClimb from "../images/nightClimb.jpg"
import stratocaster from '../images/stratocaster.jpg'
// import Carousel from "./Carousel";


export default function AboutMe() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? 1 : 0 // Switch between testimonial indices
      );
    }, 12000);

    return () => clearInterval(intervalId); // Clear interval on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on component mount


    const images = [alex, bob, collin, goldenNugget, grandCanyon, nightClimb, stratocaster];

      
    return (
        <div className={about.page}>
            <div className={styles.loadIn}><p>About.</p></div>
            <div className={about.filler}></div>
            <div className={about.content}>
                <div className={about.topText}>
                    <h1>Writing code and teaching environmental science to underrepresented youth.</h1>
                </div>
                <div className={about.bannerImgContainer}>
                    <img src={introduction} className={about.bannerPics} ></img>
                </div>
                <div className={about.bannerImgContainerMobile}>
                    <img src={introductionForMobile} className={about.bannerPicsMobile} ></img>
                    <p>Roslyn and I teaching students at Lake Mead National Recreation Area.</p>
                </div>
                <div className={about.scrollMobile}>
                    <p>S</p>
                    <p>C</p>
                    <p>R</p>
                    <p>O</p>
                    <p>L</p>
                    <p>L</p>
                </div>
               
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
                    {/* <div className={about.carouselWrapper}>
                        <h2>My photos</h2>
                        <div className={about.carouselContainer}>
                            <Carousel images={images} />
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    )
}
