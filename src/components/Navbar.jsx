import { useState, useEffect } from 'react';
import '../styles/Navbar.css'; 

function Navbar() {
  useEffect(() => {
    // Previne scroll horizontal
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-content ${isOpen ? 'active' : ''}`}>
          <a
            href="https://www.youtube.com/@nalugao"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
            onClick={closeMenu}
          >
            <span className="link-text">YouTube</span>
            <i className="bi bi-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/natalia-lugao/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
            onClick={closeMenu}
          >
            <span className="link-text">LinkedIn</span>
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/nalugao/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
            onClick={closeMenu}
          >
            <span className="link-text">GitHub</span>
            <i className="bi bi-github"></i>
          </a>
        </div>

        {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
}

export default Navbar;