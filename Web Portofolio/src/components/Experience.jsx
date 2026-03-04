import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Codifyve',
      period: 'Jul 2025 - Present',
      location: 'Bandung, Indonesia',
      type: 'Part-time',
      description: 'Acted as a Backend Developer, responsible for developing and maintaining backend systems for web-based competition platforms used in national-level academic events.',
      responsibilities: [
        'Developed and maintained backend systems for client-based web applications using Laravel (PHP) and MySQL, integrated with Next.js frontends',
        'Contributed to multiple production-ready projects, including national-level CBT competition platforms and an online therapy booking system.',
        'Collaborated with team members and external clients (student organizations and business partners) todeliver scalable and functional web solutions.'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Git', 'Postman', 'Next.js']
    },
    {
      title: 'Backend Developer - Industry Collaboration Project',
      company: 'PT Deviota Jejaring Instrumen',
      period: 'Feb 2025 - Jun 2025',
      location: 'Bandung, Indonesia',
      type: 'Collaboration Project',
      description: 'The web Inventory Management System (IMS) for Deviota companies is designed to support efficient and real-time stock management.',
      responsibilities: [
        'Developed backend features for a web-based inventory borrowing system using Laravel (PHP) andMySQL, including item management, borrowing transactions, and stock control.',
        'Collaborated with stakeholders to ensure system functionality aligned with operational requirements and user workflows.'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Git']
    },
    {
      title: 'Engineering Intern',
      company: 'PT. Samsung Service Center',
      period: 'March 2022 - August 2022',
      location: 'Bandung, Indonesia',
      type: 'Internship',
      description: 'During my internship at the Samsung Service Center, I assisted in the inspection, diagnosis, and repair of various television models.',
      responsibilities: [
        'Assisted senior engineers in diagnosing and repairing Samsung electronic devices, especially television electronics.',
        'Performed hardware and software troubleshooting to identify device issues and support repair processes.',
        'Conducted device inspections, testing, and quality checks to ensure repaired devices met service standards.',
        'Collaborated with engineers and service staff to improve service efficiency and ensure timely completion of repairs.'
      ],
      technologies: ['Electronic Repair', 'Troubleshooting', 'Quality Control', 'Team Collaboration']
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and work experience
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">📍 {exp.location}</span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
