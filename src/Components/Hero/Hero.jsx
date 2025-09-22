import React from 'react'
import styles from "./Hero.module.css"
import profile from "../../assets/KONA SAI ESWAR.jpg"
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Hero = () => {
  return (
    <div className={styles.container}>
      <img src={profile} width="200px" height="auto" className={styles.image}/>
      <div className={styles.brief}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident distinctio nesciunt ratione dolor dolores porro architecto, facilis dignissimos aliquid pariatur nemo odit cumque dolorem exercitationem ullam mollitia dolorum recusandae.
        <div className={styles.icons}>
        <div>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
            <FaLinkedin size={24} />
          </a>
        </div>
        <div>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.git}>
            <FaGithub size={24} />
          </a>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Hero