import React from 'react'
import styles from "./Hero.module.css"
import profile from "../../assets/KONA SAI ESWAR.jpg"
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Hero = ({about}) => {
  return (
    <div className={styles.container} id="about">
      <img src={profile} width="200px" height="auto" className={styles.image}/>
      <div className={styles.brief}>
        <div className={styles.name}>{about.name}</div>
        <div className={styles.about}>{about.bio}</div>
        <div className={styles.icons}>
        <div>
          <a href={about.socialUrl.likedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
            <FaLinkedin size={30} />
          </a>
        </div>
        <div>
          <a href={about.socialUrl.github} target="_blank" rel="noopener noreferrer" className={styles.git}>
            <FaGithub size={30} />
          </a>
        </div>
        </div>
      </div>

      

    </div>
  )
}

export default Hero