import React, { useState, useEffect, useRef } from 'react';
import './work.css';
import workImage from '../../assets/images/Meee.jpg';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiBootstrap, SiFirebase } from 'react-icons/si';

export default function MyWork() {
  const [activeTab, setActiveTab] = useState('frontend');
  const tabContentRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Add animation to the content when changing tabs
    if (tabContentRef.current) {
      tabContentRef.current.classList.add('tab-transition');
      setTimeout(() => {
        tabContentRef.current.classList.remove('tab-transition');
      }, 500);
    }
  };

  // For skill bar animation on scroll
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Skill data
 const skills = {
    frontend: [
      { name: 'HTML5', icon: <SiHtml5 className="html-icon" />, percentage: 95 },
      { name: 'CSS3', icon: <SiCss3 className="css-icon" />, percentage: 90 },
      { name: 'JavaScript', icon: <SiJavascript className="js-icon" />, percentage: 85 },
      { name: 'React', icon: <SiReact className="react-icon" />, percentage: 90 },
      { name: 'Bootstrap', icon: <SiBootstrap className="bootstrap-icon" />, percentage: 65 }
    ],
    backend: [
      { name: 'Node.js', icon: <SiNodedotjs className="node-icon" />, percentage: 80 },
      { name: 'Express', icon: <SiExpress className="express-icon" />, percentage: 75 },
      { name: 'MySQL', icon: <SiMysql className="mysql-icon" />, percentage: 85 },
      { name: 'Firebase', icon: <SiFirebase className="firebase-icon" />, percentage: 80 },
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb className="mongodb-icon" />, percentage: 80 },
      { name: 'MySQL', icon: <SiMysql className="mysql-icon" />, percentage: 85 },
      { name: 'Firebase', icon: <SiFirebase className="firebase-icon" />, percentage: 80 },
    ]
  };

  // Skill descriptions
  const skillDescriptions = {
    frontend: [
      "Creating responsive and intuitive user interfaces that work across all devices",
      "Building dynamic web applications with modern JavaScript frameworks like React"
    ],
    backend: [
      "Developing robust server-side applications with Node.js and Express",
      "Creating secure and efficient RESTful APIs for web and mobile applications"
    ],
    database: [
      "Designing and implementing efficient database schemas for optimal performance",
      "Working with both SQL and NoSQL databases to manage application data"
    ]
  };

  return (
    <section className="whatido-section" id="what-i-do">
      <div className="section-container">
        <div className="section-header-1">
          <h2 className="section-title-1">What I <span>Do ?</span></h2>
          <p className="section-subtitle-1">My technical expertise</p>
          <div className="title-underline"></div>
        </div>

        <div className="skills-container">
          <div className="skills-image">
            <img src={workImage} alt="Developer working" />
            <div className="experience-badge">
              <span className="exp-number">1+</span>
              <span className="exp-text">Years<br />Experience</span>
            </div>
          </div>

          <div className="skills-content" ref={skillsRef}>
            <h3 className="skills-title">My Technical Proficiency</h3>
            
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
                onClick={() => handleTabChange('frontend')}
              >
                Frontend
              </button>
              <button 
                className={`tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
                onClick={() => handleTabChange('backend')}
              >
                Backend
              </button>
              <button 
                className={`tab-btn ${activeTab === 'database' ? 'active' : ''}`}
                onClick={() => handleTabChange('database')}
              >
                Database
              </button>
            </div>

            <div className="tab-content" ref={tabContentRef}>
              {/* Skill Description Points */}
              <div className="skill-description">
                <ul>
                  {skillDescriptions[activeTab].map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
              
              {/* Skill Bars */}
              {skills[activeTab].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`} 
                      style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}