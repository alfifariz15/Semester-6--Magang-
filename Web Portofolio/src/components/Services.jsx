import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      icon: '🔧',
      title: 'API Development',
      description: 'Membangun RESTful API dan GraphQL yang scalable, secure, dan well-documented untuk berbagai kebutuhan aplikasi.'
    },
    {
      icon: '💾',
      title: 'Database Design',
      description: 'Merancang struktur database yang optimal, efficient query, dan data modeling untuk performa aplikasi yang maksimal.'
    },
    {
      icon: '🔐',
      title: 'System Security',
      description: 'Implementasi authentication, authorization, dan security best practices untuk melindungi data dan aplikasi.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Optimasi performa backend, caching strategies, dan load balancing untuk handling high traffic.'
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title-center">My Backend Services</h2>
          <p className="section-subtitle">
            Layanan pengembangan backend yang saya tawarkan untuk membangun sistem yang robust dan scalable
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                Read More <span className="arrow-link">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
