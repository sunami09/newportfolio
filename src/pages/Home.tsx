import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          <span className="gradient-text">Hello, I'm</span>
          <br />
          <span className="name">Sunami</span>
        </h1>
        <p className="home-subtitle">Software Engineer</p>
        <p className="home-description">
          The 'T' is non-existent. So is my work-life balance.
        </p>
        <p className="home-description">
          Merge conflicts are just drama between branches.
        </p>
        <div className="home-buttons">
          <a href="/projects" className="btn btn-primary">View Projects</a>
          <a href="/contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Home;