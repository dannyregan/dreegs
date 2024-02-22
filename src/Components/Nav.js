import React, {useState, useEffect} from "react";
import styles from './Nav.module.css';
import hero from '../images/Hero.jpg';

export default function Nav() {
    useEffect(() => {
        description()
    }, [])

    const [a, setA] = useState('A');
    const time = 1050 * 7;

    useEffect(() => {
        setTimeout(() => {
            setA('');
        }, time)
    }, [])

    const [noun, setNoun] = useState(['Rock Climber.'])

    function description() {
        const nouns = ['Cyclist.', 'Photographer.', 'Runner.', 'Biologist.', 'Problem Solver.', 'Front End Developer.'];
        var i = 0;
        var interval = setInterval(function() {
            let word = nouns[i++];
            if (i === nouns.length) {
                clearInterval(interval);
            }
            setNoun(word);
        }, 1000)
    }

    return (
        <>
            <div className={styles.bannerContainer}>
                <div className={styles.bannerImg}>
                    <img src={hero} alt='Danny Regan'></img>
                </div>
                <div className={styles.nav}>
                    <div className={styles.navDivLeft}>
                        <a href='#'><p className={styles.initials}>DR</p></a>
                    </div>
                    <div className={styles.navDivCenter}>
                        <ul className={styles.navTabs}>
                            <a href='#About Me'>
                                <li>about me</li>
                                <div className={styles.dots}></div>
                            </a>
                            <a href='#Portfolio'>
                                <li>portfolio</li>
                                <div className={styles.dots}></div>
                            </a>
                            <a href="#Resume">
                                <li>resume</li>
                                <div className={styles.dots}></div>
                            </a>
                        </ul>
                    </div>
                    <div className={styles.navDivRight}>
                        <a href='#'>
                            <p className={styles.initials}>blog</p>
                        </a>
                    </div>
                </div>
                <div className={styles.dannyRegan}>
                    <h1 className={styles.danny}>Danny</h1>
                    <h1 className={styles.regan}>Regan</h1>
                    <p className={styles.frontEnd}>{a} <span>{noun}</span></p>
                </div>     
                <div className={styles.valueContainer}>
                        <p className={styles.valueStatement}>Here's a text box about my stupid little value statement that says what I bring to the table in a single sentence.</p>
                        <div className={styles.buttonsContainer}>
                            <a href='#' className={[styles.button, styles.contactMe]}><button>Contact Me</button></a>
                            <a href='#' className={[styles.button, styles.downloadMyResume]}><button>Download My Resume</button></a>
                        </div>
                    </div>     
                <div className={styles.motto}>
                    <p>some text, a motto for the bottom right of banner image.</p>
                </div>
                
                {/* <div class="scrolling-text-container">
    <div class="scrolling-text-inner" style="--marquee-speed: 20s; --direction:scroll-left" role="marquee">
        <div class="scrolling-text">
            <div class="scrolling-text-item">Your First Announcement</div>
            <div class="scrolling-text-item">Your Second Announcement</div>
            <!-- Add More Items Here -->
        </div>
    </div>
</div> */}
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
                </div>
            </div>
        </>
    )
}

