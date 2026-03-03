import React from 'react'
import './TechStack.css'

function TechStack() {
  const techStacks = [
    { 
      name: 'PHP', 
      icon: '🐘', 
      color: '#777BB4',
      description: 'Server-side Scripting'
    },
    { 
      name: 'Laravel', 
      icon: '⚡', 
      color: '#FF2D20',
      description: 'PHP Web Framework'
    },
    { 
      name: 'MySQL', 
      icon: '🗄️', 
      color: '#4479A1',
      description: 'Relational Database'
    },
    { 
      name: 'Postman', 
      icon: '📮', 
      color: '#FF6C37',
      description: 'API Testing Tool'
    },
    { 
      name: 'Git', 
      icon: '📦', 
      color: '#F05032',
      description: 'Version Control System'
    },
  ]

  return (
    <section id="techstack" className="techstack">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Tools dan teknologi yang saya kuasai
          </p>
        </div>
        <div className="tech-grid">
          {techStacks.map((tech, index) => (
            <div key={index} className="tech-card" data-color={tech.color}>
              <div className="tech-card-inner">
                <div className="tech-icon-wrapper">
                  <span className="tech-icon">{tech.icon}</span>
                </div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
              <div className="tech-glow" style={{ background: tech.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
