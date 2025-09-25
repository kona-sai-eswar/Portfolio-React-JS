import React from 'react'
import styles from "./Header.module.css"
import { FaSun, FaMoon } from "react-icons/fa";


const Header = ({ toggleMode, lightMode }) => {
  return (
    <div className={styles.header}>
        <nav>
            {/* <div className={styles.navs}> */}
            <div><a href='#about' className={styles.url}>About</a></div>
            <div><a href='#projects' className={styles.url}>Projects</a></div>
            <div><a href='#experience' className={styles.url}>Experience</a></div>
            {/* </div> */}
        </nav>
        <button onClick={toggleMode} className={styles.toggleBtn}>
            {lightMode ? <FaMoon size={15} /> : <FaSun size={18} />}
        </button>
    </div>
  )
}

export default Header