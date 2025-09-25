import React from 'react'
import styles from "./Projects.module.css"
import { FiChevronDown } from "react-icons/fi";
import ProjectCard from './ProjectCard'
import { useState } from 'react'
import { useMemo } from 'react';

const Projects = ({projects}) => {
  const [isload, setIsLoad]=useState(false)
  const list = isload ? projects : projects.slice(0, 3);
  return (
    <>
      <div className={styles.container} id="projects">
      <div className={styles.heading}>PROJECTS</div>
        {
          list.map((project,i)=><ProjectCard project={project} key={i}/>)
        }
      </div>
      <div className={isload?styles.showMore:styles.showMoreToggle}>
        <FiChevronDown size={40} onClick={()=>setIsLoad(p=>!p)}/>
      </div>
    </>
  )
}

export default Projects