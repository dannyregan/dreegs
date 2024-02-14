import React, {useState, useEffect} from "react";
import styles from './Nav.module.css';
import headshot from '../images/fergusonsDan.jpg'

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

    const [noun, setNoun] = useState(['rock climber'])

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
            <div className={styles.nav}>
                <div>
                    <p>DR</p>
                </div>
                <div className={styles.navDivRight}>
                    <ul className={styles.navTabs}>
                        <a href="#"><li>About Me</li></a>
                        <a href="#"><li>Projects</li></a>
                        <a href="#"><li>Resume</li></a>
                        <a href="#"><li>Blog</li></a>
                    </ul>
                </div>
            </div>
            <div>
                <h1>Danny</h1>
                <br></br>
                <h1>Regan</h1>
                <p>{a} <strong>{noun}</strong></p>
                <p>Here's a text box about my stupid little value statement that says what I bring to the table in a single sentence.</p>
                <a href='#'><button>Contact Me</button></a>
                <a href='#'><button>Download my Resume</button></a>
            </div>
            <div>
                <img src={headshot} height='400px'></img>
            </div>
        </>
    )
}








