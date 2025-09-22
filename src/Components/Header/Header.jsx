import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <nav>
            <div><a href='#projects' className={styles.url}>Projects</a></div>
            {/* <div><a href='#skills' className={styles.url}>Skills</a></div> */}
            <div><a href='#experience' className={styles.url}>Experience</a></div>
        </nav>
    </div>
  )
}

export default Header