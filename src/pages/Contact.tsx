import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [activeField, setActiveField] = useState('to');
  
  const fullToEmail = 'sunamidasgupta00@gmail.com';
  const fullSubject = 'Hey Sunami.....';
  const fullBody = 'Wanna sync?';

  useEffect(() => {
    // Type "To:" email
    let currentIndex = 0;
    const toInterval = setInterval(() => {
      if (currentIndex <= fullToEmail.length) {
        setToEmail(fullToEmail.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(toInterval);
        // Start typing subject after a delay
        setTimeout(() => {
          setActiveField('subject');
          let subjectIndex = 0;
          const subjectInterval = setInterval(() => {
            if (subjectIndex <= fullSubject.length) {
              setSubject(fullSubject.slice(0, subjectIndex));
              subjectIndex++;
            } else {
              clearInterval(subjectInterval);
              // Start typing body after a delay
              setTimeout(() => {
                setActiveField('body');
                let bodyIndex = 0;
                const bodyInterval = setInterval(() => {
                  if (bodyIndex <= fullBody.length) {
                    setBody(fullBody.slice(0, bodyIndex));
                    bodyIndex++;
                  } else {
                    clearInterval(bodyInterval);
                    setActiveField('');
                  }
                }, 120);
              }, 500);
            }
          }, 150);
        }, 500);
      }
    }, 80);

    return () => clearInterval(toInterval);
  }, []);

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
              <span className="info-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>sunamidasgupta00@gmail.com</p>
              </div>
            </div>
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
          
          <div className="email-animation">
            <div className="email-mockup">
              <div className="email-header">
                <div className="email-buttons">
                  <span className="email-btn red"></span>
                  <span className="email-btn yellow"></span>
                  <span className="email-btn green"></span>
                </div>
                <div className="email-title">New Message</div>
              </div>
              <div className="email-body">
                <div className="email-field">
                  <span className="field-label">To:</span>
                  <span className="field-value">{toEmail}{activeField === 'to' && <span className="cursor">|</span>}</span>
                </div>
                <div className="email-field">
                  <span className="field-label">Subject:</span>
                  <span className="field-value">{subject}{activeField === 'subject' && <span className="cursor">|</span>}</span>
                </div>
                <div className="email-message">
                  {body}{(activeField === 'body' || activeField === '') && <span className="cursor">|</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;