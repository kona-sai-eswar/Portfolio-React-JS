import React from 'react'
import styles from "./Skills.module.css"

const Skills = ({skills}) => {
  return (
    <div className={styles.container} id="skills">
      {/* <div className={styles.skillsheader}>Skills</div> */}
      <div className={styles.skills}>
        <div  className={styles.frontend}>
            {
              skills.map((skill,i)=><span key={i}>{skill}</span>)
            }
        </div>
      </div>
    </div>
  )
}

export default Skills