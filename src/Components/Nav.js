import React, {useState, useEffect} from "react";
import styles from './Nav.module.css';

export default function Nav() {
    useEffect(() => {
        description()
    }, [])

    const [from, setFrom] = useState('');
    const time = 1050 * 7;

    useEffect(() => {
        setTimeout(() => {
            setFrom('from Andover, Massachusetts');
        }, time)
    }, [])

    const [noun, setNoun] = useState(['rock climber'])

    function description() {
        const nouns = ['cyclist', 'photographer', 'runner', 'problem solver', 'biologist', 'front end developer'];
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
                    <h1>Danny Regan</h1>
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
                <p>Hi, I'm Danny.</p>
                <p>A <strong>{noun}</strong> {from}</p>
            </div>
        </>
    )
}








