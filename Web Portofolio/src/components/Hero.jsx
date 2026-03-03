import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-main-text">
            <span className="text-line">I AM</span>
            <span className="text-line text-gradient">BACKEND</span>
            <span className="text-line">DEVELOPER</span>
          </h1>
          <p className="hero-subtitle">
            Building robust and scalable server-side solutions with PHP & Laravel
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn btn-primary">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#techstack" className="hero-btn btn-secondary">
              <span>Tech Stack</span>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-glow"></div>
          <div className="image-frame">
            <img src="/images/alfi.JPG" alt="Muhammad Alfi Fariz" />
            <div className="image-overlay"></div>
          </div>
          <div className="floating-badge badge-1">
            <div className="badge-icon">🚀</div>
            <div className="badge-text">
              <strong>PHP Expert</strong>
              <small>Laravel Framework</small>
            </div>
          </div>
          <div className="floating-badge badge-2">
            <div className="badge-icon">💾</div>
            <div className="badge-text">
              <strong>Database</strong>
              <small>MySQL & More</small>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero
