import React, { useState } from 'react'
import './Certificate.css'

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const certificates = [
    {
      title: '1st Place Winner – UI/UX Design Division',
      issuer: 'DIMAS-TI AMLI National Competition 2025.',
      date: '1 November 2025',
      credentialId: '164675/UN38.3/DL.01.02/2025',
      image: '/images/sertif/dimasti.png',
      description: 'Achieved 1st place in the UI/UX Design division at a national-level competition by designing Histofy (History Amplify), a history-themed educational application focused on improving user engagement and learning experience.',
      skills: ['Figma', 'Canva'],
      category: 'certification'
    },
    {
      title: 'Participant – Capture The Flag (CTF) Cybersecurity Challenge',
      issuer: 'COMPFEST 17',
      date: 'July 2025',
      credentialId: '-',
      image: '/images/sertif/ctf.jpg',
      description: 'Participated in the Capture The Flag (CTF) Cybersecurity Challenge, focusing on real-world security scenarios and hands-on problem-solving.',
      skills: ['Cybersecurity', 'Problem Solving', 'Teamwork'],
      category: 'certification'
    },
    {
      title: 'Bootcamp Mobile Development',
      issuer: 'IT CAMP 2025',
      date: '9 May 2025',
      credentialId: '-',
      image: '/images/sertif/itcamp.png',
      description: 'Developed mobile applications using modern frameworks and tools, demonstrating proficiency in mobile development best practices.',
      skills: ['Kotlin'],
      category: 'certification'
    },
    {
      title: 'Certificate Developer',
      issuer: 'Alibaba Cloud Certification',
      date: '30 December 2023',
      credentialId: 'ACCD0119700100003683',
      image: '/images/sertif/alibaba.jpg',
      description: 'Developed application with Alibaba cloud services, demonstrating proficiency in cloud computing and application development.',
      skills: ['MySQL', 'Database Design', 'SQL'],
      category: 'certification'
    },
    {
      title: 'BEM Kemakom FPMIPA UPI 2024',
      issuer: 'Divisi Penyaluran Minat & Bakat (DPMB) - Staff Biro Olahraga',
      date: 'January - March 2024',
      credentialId: '071/BEM-KEMAKOM/I/2025',
      image: '/images/sertif/bem.png',
      description: 'Becoming a provider of interests and talents for computer science students & computer science education.',
      skills: ['Teamwork', 'Team Management', 'Event Organization'],
      category: 'achievement'
    },
    {
      title: 'Logistics and Security Committee',
      issuer: 'DINAMIK - 19',
      date: '15 Desember 2024',
      credentialId: '040/DINAMIK-19/BEM-KEMAKOM/XI/2024',
      image: '/images/sertif/dinamik.png',
      description: 'coordinating logistics and ensuring security, demonstrating strong organizational and communication skills.',
      skills: ['Event Management', 'Coordination', 'Communication'],
      category: 'achievement'
    },
    {
      title: 'Division Staff Spektator and Logistics',
      issuer: 'Parade Olahraga FPMIPA (PARAMPA) 2025',
      date: '24 January - 23 February 2025',
      credentialId: '50/Pan.PARAMPA/ISTIMEWA/BEM.KEMA.FPMIPA/III/2025',
      image: '/images/sertif/parampa.png',
      description: 'Contributed to the success of PARAMPA 2025 by managing logistics and ensuring a smooth experience for spectators, demonstrating strong organizational and teamwork skills.',
      skills: ['Event Management', 'Logistics Coordination', 'Teamwork'],
      category: 'achievement'
    },
  ]

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCertificate(null)
    document.body.style.overflow = 'unset'
  }

  // Filter certificates based on active filter
  const filteredCertificates = certificates.filter(cert => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'certification') return cert.category === 'certification'
    if (activeFilter === 'achievement') return cert.category === 'achievement'
    return true
  })

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certificates & Achievements</h2>
          <p className="section-subtitle">
            Sertifikasi dan pencapaian yang pernah saya raih
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'certification' ? 'active' : ''}`}
            onClick={() => setActiveFilter('certification')}
          >
            Certifications
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'achievement' ? 'active' : ''}`}
            onClick={() => setActiveFilter('achievement')}
          >
            Achievements
          </button>
        </div>
        
        <div className="certificates-grid">
          {filteredCertificates.map((certificate, index) => (
            <div key={index} className="certificate-card" onClick={() => openModal(certificate)}>
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay">
                  <span className="view-badge">View Certificate</span>
                </div>
              </div>
              <div className="certificate-content">
                <div className="certificate-header">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <div className="certificate-meta">
                    <span className="issuer">{certificate.issuer}</span>
                    <span className="date">{certificate.date}</span>
                  </div>
                </div>
                <div className="certificate-skills">
                  {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="skill-tag more">+{certificate.skills.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <span>×</span>
            </button>
            
            <div className="modal-body">
              <div className="certificate-image-large">
                <img src={selectedCertificate.image} alt={selectedCertificate.title} />
              </div>
              
              <div className="certificate-info">
                <h2>{selectedCertificate.title}</h2>
                
                <div className="info-row">
                  <div className="info-item">
                    <span className="info-label">Issued by</span>
                    <span className="info-value">{selectedCertificate.issuer}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Date</span>
                    <span className="info-value">{selectedCertificate.date}</span>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-label">Credential ID</span>
                  <span className="info-value">{selectedCertificate.credentialId}</span>
                </div>

                <div className="certificate-description">
                  <h3>About this certification</h3>
                  <p>{selectedCertificate.description}</p>
                </div>

                <div className="certificate-skills-modal">
                  <h3>Skills Covered</h3>
                  <div className="skills-list">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificate
