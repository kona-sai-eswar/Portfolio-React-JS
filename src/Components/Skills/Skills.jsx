import React from 'react'
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      {/* <div className={styles.skillsheader}>Skills</div> */}
      <div className={styles.skills}>
        <div  className={styles.frontend}>
            <span>React</span>
            <span>Redux toolkit</span>
            <span>React router</span>
            <span>React testing library</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
        </div>
      </div>
    </div>
  )
}

export default Skills