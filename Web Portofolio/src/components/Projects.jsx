import React, { useState } from 'react'
import './Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: 'National CBT Competition Platform – Biology Student Association (FPMIPA UPI)',
      description: 'Developing RESTful APIs using Laravel (PHP) to support online exam workflows, including user authentication, question management, and strict security.',
      tech: ['Laravel', 'MySQL', 'PHP', 'REST API', 'Postman'],
      gradient: 'linear-gradient(135deg, #ef0c0cff 0%, #ffffffff 100%)',
      link: '#',
      screenshots: [
        '/images/bfub/bfub1.png',
        '/images/bfub/bfub2.png',
        '/images/bfub/bfub3.png',
        '/images/bfub/bfub4.png'
      ],
      features: [
        'User authentication & authorization',
        'Question bank management',
        'Real-time exam monitoring',
        'Automated scoring system',
        'Security & anti-cheating measures'
      ]
    },
    {
      title: 'National CBT Competition Platform – Physics Student Association (FPMIPA UPI)',
      description: 'Built backend logic for an online competition system using Laravel (PHP) and MySQL, supporting exam execution and result processing.',
      tech: ['Laravel','PHP', 'MySQL', 'REST API', 'Postman', 'JavaScript'],
      gradient: 'linear-gradient(135deg, #8c1999ff 0%, #e22af3ff 100%)',
      link: '#',
      screenshots: [
        '/images/hmbf/hmbf2.png',
        '/images/hmbf/hmbf1.png',
        '/images/hmbf/hmbf3.png'
      ],
      features: [
        'Competition registration system',
        'Exam session management',
        'Result processing & ranking',
        'Certificate generation',
        'Admin dashboard'
      ]
    },
    {
      title: 'Online Therapy Booking System',
      description: 'Developing backend services for an online therapy booking platform using Laravel (PHP) and MySQL, which supports scheduling, order management, and payments.',
      tech: ['Laravel','PHP', 'MySQL', 'REST API', 'Postman'],
      gradient: 'linear-gradient(135deg, #38a2ffff 0%, #ffffffff 100%)',
      link: 'https://app.fisiopro.id/'
    },
    {
      title: 'Inventory Management System (IMS) Deviota',
      description: 'The web Inventory Management System (IMS) for Deviota companies is designed to support efficient and real-time stock management. The system includes features such as stock monitoring, supplier and customer logging, and report generation automation. In addition, the IMS is equipped with a tool loan and return system for ITB students to ensure more organized asset management.',
      tech: ['Laravel','PHP', 'MySQL'],
      gradient: 'linear-gradient(135deg, #b113a1ff 0%, #06a2f1ff 100%)',
      link: '#',
      screenshots: [
        '/images/project-placeholder.jpg',
        '/images/project-placeholder.jpg',
        '/images/project-placeholder.jpg'
      ],
      features: [
        'Real-time stock monitoring',
        'Supplier & customer management',
        'Automated report generation',
        'Tool loan & return system',
        'Asset management for ITB students'
      ]
    },

    {
      title: 'Quiz Online Platform',
      description: 'The Quiz Online Platform is designed to facilitate online quizzes and assessments for educational institutions. It includes features such as user authentication, quiz creation and management, real-time result tracking, and analytics.',
      tech: ['Laravel','PHP', 'MySQL', 'JavaScript'],
      gradient: 'linear-gradient(135deg, #7c13fdff 0%, #012ffdff 100%)',
      link: '#',
      screenshots: [
        '/images/quiz/quiz1.png',
        '/images/quiz/quiz2.png',
        '/images/quiz/quiz3.png',
        '/images/quiz/quiz4.png',
        '/images/quiz/quiz5.png'
      ],
      features: [
        'User authentication system',
        'Quiz creation & management',
        'Real-time result tracking',
        'Analytics & reporting',
        'Multi-question type support'
      ]
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      )
    }
  }

  const handleLinkClick = (e, project) => {
    e.preventDefault()
    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank')
    } else {
      openModal(project)
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Some backend projects I have worked on
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-gradient" style={{ background: project.gradient }}></div>
              <div className="project-content">
                <div className="project-number">0{index + 1}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="project-link"
                  onClick={(e) => handleLinkClick(e, project)}
                >
                  <span>{project.link && project.link !== '#' ? 'Visit Website' : 'View Details'}</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <span>×</span>
            </button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-screenshots">
                <div className="screenshot-carousel">
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <>
                      <div className="screenshot-main">
                        <img 
                          src={selectedProject.screenshots[currentImageIndex]} 
                          alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                        />
                      </div>
                      
                      {selectedProject.screenshots.length > 1 && (
                        <>
                          <button className="carousel-btn prev" onClick={prevImage}>
                            <span>‹</span>
                          </button>
                          <button className="carousel-btn next" onClick={nextImage}>
                            <span>›</span>
                          </button>
                          
                          <div className="carousel-indicators">
                            {selectedProject.screenshots.map((_, index) => (
                              <button
                                key={index}
                                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
                
                {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                  <div className="screenshot-thumbnails">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div 
                        key={index} 
                        className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img src={screenshot} alt={`Thumbnail ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-info">
                <h3>About This Project</h3>
                <p>{selectedProject.description}</p>

                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3>Technologies Used</h3>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="modal-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
