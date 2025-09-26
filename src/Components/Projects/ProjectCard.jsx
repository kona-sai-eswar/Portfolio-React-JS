import React from 'react'
import styles from "./Projects.module.css"

const ProjectCard = ({project}) => {
  return (
        <>
        <div className={styles.project}>
        <div className={styles.title}>{project.heading}</div>
        {/* <img src={TLI} width="200px" height="auto" className={styles.images}/> */}
        <p className={styles.about}>{project.description}</p>
        <div>
        <div className={styles.tech}>Tech used</div>
        <div className={styles.techDetail}>
        {
            project.tech.map((t,i)=><span key={i} className={styles.techItem}>{t}</span>)
        }
        </div>
        </div>
        <div className={styles.links}>
          {project.liveDemo && <a href={project.liveDemo}>Live Demo</a>}
          {project.github && <a href={project.github}>GitHub</a>}
        </div>
      </div>
        </>
    )
}

export default ProjectCard