import styles from "./Nav.module.css"
import hero3 from '../images/Hero-resized-again.jpg'

export default function Home() {
    return (
    <div className={styles.bannerContainer}>
        <div className={styles.loadIn}><p>Hi, I'm Danny.</p></div>
        <div className={styles.bannerImg}>
            <img src={hero3} alt='Danny Regan'></img>
        </div>
        <div className={styles.dannyRegan}>
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
                        <li><span>Front End Developer,</span></li>
                        <li><span>Software Engineer.</span></li>
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
    </div>
   </div>
    )
}