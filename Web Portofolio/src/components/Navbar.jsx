import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>Portofolio</h2>
          </div>
          
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#techstack" onClick={() => setIsOpen(false)}>Tech Stack</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
