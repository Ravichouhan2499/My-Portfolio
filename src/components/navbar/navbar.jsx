import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Detect scroll position for navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    
    // If using in-page scrolling for single page application
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-logo">
          <span className="bracket">&lt;</span> 
          <span className="signature">Ravi Chouhan</span> 
          <span className="bracket">/&gt;</span>
        </div>
        
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? 'line1-active' : ''}></span>
          <span className={isMenuOpen ? 'line2-active' : ''}></span>
          <span className={isMenuOpen ? 'line3-active' : ''}></span>
        </div>
        
        
          <ul className={`navbar-menu ${isMenuOpen ? 'menu-open' : ''}`}>
          {[
            { name: "Home", path: "/" },
            { name: "Education", path: "/education" },
            { name: "Experience", path: "/experience" },
            { name: "Projects", path: "/projects" },
            { name: "Contact Me", path: "/contact" }
          ].map((item) => (
            <li 
              key={item.name} 
              className={activeSection === item.name ? 'active' : ''}
            >
              <Link 
                to={item.path} 
                onClick={() => [handleNavClick(item.name), handleLinkClick()]}
                on
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}