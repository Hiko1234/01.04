import React from 'react'

// import custom style
import styles from './Header.module.css';

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__logo}>logo</div>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav_list}>
                        <li className={styles.header__nav_li}>test</li>
                        <li className={styles.header__nav_li}>test</li>
                        <li className={styles.header__nav_li}>test</li>
                        <li className={styles.header__nav_li}>test</li>
                        <li className={styles.header__nav_li}>test</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header