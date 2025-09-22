import React from 'react'
import styles from "./Experience.module.css"

const Experience = () => {
  return (
    <>
      <div className={styles.container} id="experience">
      <div className={styles.experience}>Experience</div>
        <div className={styles.companyDetails}>
          <div>Company</div>
          <div>Skills</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, placeat? Culpa, saepe impedit praesentium labore perferendis harum minus omnis suscipit. Accusantium distinctio earum debitis! Ex consequuntur sint nihil officia repudiandae!</div>
        </div>
      </div>
    </>
  )
}

export default Experience