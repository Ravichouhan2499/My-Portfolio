import React, { useEffect, useRef } from 'react';
import './home.css';
import developerImg from '../../assets/images/home.png';
import { FaGithub, FaLinkedinIn, FaGoogle, FaTwitter, FaFacebookF, FaInstagram, FaTelegram, FaSkype } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function IntroSection() {
  const textRef = useRef(null);
  
   const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animated typing effect with better performance
  useEffect(() => {
    const roles = ["MERN Stack Developer", "Frontend Developer", "Backend Developer", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        charIndex--;
        typingSpeed = 50;
      } else {
        charIndex++;
        typingSpeed = 100;
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentRole.substring(0, charIndex);
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next role
      }
      
      const typingTimer = setTimeout(type, typingSpeed);
      return () => clearTimeout(typingTimer);
    };
    
    const initialTimer = setTimeout(type, 1000);
    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <section className="intro-section" id="home">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="intro-text-container">
          <div className="intro-greeting">Hello, I'm</div>
          <h1 className="intro-name">Ravi Chouhan</h1>
          <div className="intro-title">
            I'm a <span className="typing-text" ref={textRef}></span><span className="cursor">|</span>
          </div>
          <p className="intro-description">
            Passionate MERN Stack Developer specializing in MongoDB, Express.js, React, and Node.js. I build responsive and high-performance web applications with clean, maintainable code and intuitive user experiences, always focused on delivering scalable and robust full-stack solutions.
          </p>

          <div className="intro-actions">
            <Link to="/contact" onClick={handleLinkClick} className="primary-btn">Get In Touch</Link>
            <Link to="/projects" onClick={handleLinkClick} className="secondary-btn">View My Work</Link>
          </div>

          <div className="social-icons-container">
            <a href="https://github.com/Ravichouhan2499" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ravi-chouhan-a788411a0/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:ravichouhan2499@gmail.com" className="social-icon google" aria-label="Email">
              <FaGoogle />
            </a>
            <a href="https://t.me/ravi_chouhan_2499" target="_blank" rel="noopener noreferrer" className="social-icon telegram" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004951338493" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ravi_chouhan_2499/" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="intro-image-container">
          <div className="image-wrapper">
            <img src={developerImg} alt="Ravi Chouhan - Full Stack Developer" />
          </div>
          <div className="floating-badge html-badge">HTML5</div>
          <div className="floating-badge css-badge">CSS3</div>
          <div className="floating-badge firebase-badge">Firebase</div>
          <div className="floating-badge js-badge">JavaScript</div>
          <div className="floating-badge react-badge">React</div>
          <div className="floating-badge node-badge">Node</div>
          <div className="floating-badge mongo-badge">MongoDb</div>
          <div className="floating-badge java-badge">Java</div>
          <div className="experience-badge">
            <span className="years">1+</span>
            <span className="text">Years<br/>Experience</span>
          </div>
        </div>
      </div>
      
      {/* <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div> */}
    </section>
  );
}