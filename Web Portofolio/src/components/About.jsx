import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="section-label">HELLO</span>
          <h2 className="section-title-large">I'M MUHAMMAD ALFI FARIZ</h2>
        </div>
        <div className="about-content-new">
          <div className="about-left">
            <p className="about-intro">
              Passionate Backend Developer dedicated to crafting exceptional digital experiences. 
              With a keen eye for detail and a user-centric approach, I transform ideas into 
              intuitive and visually stunning designs.
            </p>
            <div className="about-image-secondary">
              <img src="/images/tes.jpg" alt="About Me" />
            </div>
          </div>
          <div className="about-right">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <h3>1+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <h3>5+</h3>
                  <p>Completed Project</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <h3>7+</h3>
                  <p>Certificates and Achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
