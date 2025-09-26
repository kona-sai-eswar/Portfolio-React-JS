import { useState, useEffect } from 'react'
import './App.css'
import Experience from './Components/Experience/Experience'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import data from "./data.json"

function App() {
  const [lightMode, setLightMode] = useState(()=>{
    const theme=JSON.parse(localStorage.getItem("Theme"));
    return theme? theme : false;
  });

  const toggleMode = () => {
    setLightMode(prev => !prev);
  }

  useEffect(()=>{
    localStorage.setItem("Theme",JSON.stringify(lightMode))

    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }

  },[lightMode])


  return (
    <>
      <Header toggleMode={toggleMode} lightMode={lightMode}/>
      <div className='container' >
        <Hero about={data.about}/>
        <Skills skills={data.skills}/>
        <Projects projects={data.projects}/>
        <Experience experiences={data.experiences}/>
      </div>
    </>
  )
}

export default App
