import React from 'react'
import styles from "./Projects.module.css"
import TLI from "../../assets/TLI.png"

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
    <div className={styles.heading}>PROJECTS</div>
      <div className={styles.project}>
        <div>Heading</div>
        <img src={TLI} width="200px" height="auto" className={styles.images}/>
        <p className={styles.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima laudantium culpa veniam, at vitae itaque quisquam, cum odit dignissimos aperiam reiciendis sunt dolorum debitis. Quasi maiores ipsam amet sequi?</p>
        <p>Tech used</p>
        <div className={styles.links}>
          <a href='#'>Live Demo</a>
          <a href="#">GitHub</a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={TLI} width="200px" height="auto" className={styles.images}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima laudantium culpa veniam, at vitae itaque quisquam, cum odit dignissimos aperiam reiciendis sunt dolorum debitis. Quasi maiores ipsam amet sequi?</p>
        <div className={styles.links}>
          <a href='#'>Live Demo</a>
          <a href="#">GitHub</a>
        </div>
      </div>

    </div>
  )
}

export default Projects