import React from 'react'
import styles from "./Header.module.css"
import { FaSun, FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';



const Header = ({ toggleMode, lightMode }) => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <div className={styles.header}>
        <div className={styles.menuMobile} onClick={()=>setIsOpen(p=>!p)}>
          <FiMenu size={24} />
        </div>
        <nav className={ isOpen ? styles.menu : styles.menuHidden }>
            {/* <div className={styles.navs}> */}
            <div><a href='#about' className={styles.url} onClick={() => setIsOpen(false)}>About</a></div>
            <div><a href='#projects' className={styles.url} onClick={() => setIsOpen(false)}>Projects</a></div>
            <div><a href='#experience' className={styles.url} onClick={() => setIsOpen(false)}>Experience</a></div>
            {/* </div> */}
        </nav>
        
        <button onClick={toggleMode} className={styles.toggleBtn}>
            {lightMode ? <FaMoon size={15} /> : <FaSun size={18} />}
        </button>
    </div>
  )
}

export default Header