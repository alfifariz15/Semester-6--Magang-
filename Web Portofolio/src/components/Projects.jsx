import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'E-Commerce REST API',
      description: 'Backend sistem e-commerce lengkap dengan autentikasi, manajemen produk, keranjang belanja, dan sistem pembayaran menggunakan Laravel.',
      tech: ['Laravel', 'MySQL', 'JWT'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '#'
    },
    {
      title: 'Blog CMS Backend',
      description: 'Content Management System untuk blog dengan fitur CRUD artikel, kategori, komentar, dan role-based access control.',
      tech: ['PHP', 'MySQL', 'REST API'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '#'
    },
    {
      title: 'Inventory Management API',
      description: 'Sistem manajemen inventory dengan fitur tracking stok, supplier management, dan laporan real-time menggunakan Laravel.',
      tech: ['Laravel', 'MySQL', 'Postman'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: '#'
    },
    {
      title: 'School Management System',
      description: 'Backend sistem manajemen sekolah dengan fitur data siswa, guru, jadwal, nilai, dan absensi lengkap dengan dashboard admin.',
      tech: ['Laravel', 'MySQL', 'API'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      link: '#'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Beberapa project backend yang pernah saya kerjakan
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
                <a href={project.link} className="project-link">
                  <span>View Details</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
