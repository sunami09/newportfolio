import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link 
          to="/" 
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/experience" 
          className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
        >
          Experience
        </Link>
        <Link 
          to="/projects" 
          className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;