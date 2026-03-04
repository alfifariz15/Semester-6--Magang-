import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certificate from './components/Certificate'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Certificate />
      <Footer />
    </div>
  )
}

export default App
