import './App.css'
import Experience from './Components/Experience/Experience'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <Header/>
      <div className='container'>
        <Hero/>
        <Skills/>
        <Projects/>
        <Experience/>
      </div>
    </>
  )
}

export default App
