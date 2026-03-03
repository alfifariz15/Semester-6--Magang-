import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hubungi Saya</h3>
            <div className="contact-links">
              <a href="mailto:muhammadalfifariz@gmail.com">📧 muhammadalfifariz@gmail.com</a>
              <a href="tel:+6283173668969">📱 +62 831 7366 8969</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://github.com/alfifariz15" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/alfifariz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/alfifariz15/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="quick-links">
              <a href="#home">Home</a>
              <a href="#about">Tentang</a>
              <a href="#techstack">Tech Stack</a>
              <a href="#projects">Projek</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Portofolio Muhammad Alfi Fariz</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
