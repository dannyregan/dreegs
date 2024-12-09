import React from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.navDivLeft}>
                <Link to='/Home'><p className={styles.initials}>DR</p></Link>
            </div>
            <div className={styles.navDivCenter}>
            </div>
            <div className={styles.navDivRight}>
                <ul className={styles.navTabs}>
                    <CustomLink to='/Portfolio'>Portfolio</CustomLink>
                    <CustomLink to='/AboutMe'>About</CustomLink>
                    <CustomLink to='/Resume'>Resume</CustomLink>
                </ul>
            </div>
        </div>
    );
}

function CustomLink({ to, children }) {
    return (
        <li>
            <Link to={to} className={styles.customLink}>{children}</Link>
        </li>
    );
}
