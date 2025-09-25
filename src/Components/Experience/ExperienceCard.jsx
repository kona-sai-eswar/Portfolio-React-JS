import React from 'react'
import styles from "./Experience.module.css"

const ExperienceCard = ({experience}) => {
  return (
    <>
        <div className={styles.companyDetails}>
          <div className={styles.company}>{experience.company}</div>
          <div className={styles.role}>{experience.role} | {experience.duration}</div>
          <ul className={styles.desc}>
            {
                experience.description.map((item,i)=>{
                    return <li key={i} className={styles.point}>- {item}</li>
                })
            }
          </ul>
        </div>
    </>
  )
}

export default ExperienceCard