import React from 'react'
import styles from "./Experience.module.css"
import ExperienceCard from './ExperienceCard'

const Experience = ({experiences}) => {
  return (
    <>
      <div className={styles.container} id="experience">
        <div className={styles.experience}>{experiences.length>1?"Experiences":"Experience"}</div>
        {
          experiences.map((experience,index)=>{ return <ExperienceCard experience={experience} key={index}/>})
        }
      </div>
    </>
  )
}

export default Experience