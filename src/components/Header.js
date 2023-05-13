import React from "react";
import styles from './Header.module.css';


function Header() {
    return <header className={styles.header}>
        <h1>System Design Corners</h1>
        <nav>
            <ul>
                <li>
                    <a href="/" className={styles.link}>Home</a>
                </li>
                <li><a href="/about" className={styles.link}>About</a></li>
                <li><a href="/contact" className={styles.link}>Contact</a></li>
            </ul>
        </nav>
    </header>
}

export default Header