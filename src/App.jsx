import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import banner from './assets/video/neon.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <video className="w-full h-screen object-cover fixed -z-50" src={banner} autoPlay loop muted />
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
    </>
  )
}

export default App
