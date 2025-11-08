import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>sunamidasgupta00@gmail.com</p>
              </div>
            </div>
            {/* <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div> */}
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>Seattle, WA</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🧑‍💻</span>
              <div>
                <h3>Occupation</h3>
                <p>Software Engineer Intern (Amazon)</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎓</span>
              <div>
                <h3>School</h3>
                <p>California State University, Chico</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sunamidasgupta/" className="social-link">LinkedIn</a>
              <a href="https://github.com/sunami09/" className="social-link">GitHub</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;