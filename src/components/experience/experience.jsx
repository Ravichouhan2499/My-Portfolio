import React, { useState } from 'react';
import './experience.css';
import image from '../../assets/images/ex1.png';
import logo from '../../assets/images/sitelogo.jpg';
import logo1 from '../../assets/images/CodeBetter.png';
import infosys from '../../assets/images/infosys.png';

const WorkExperience = () => {
  const [isWorkExpanded, setIsWorkExpanded] = useState(false);

  const toggleWorkExperience = () => {
    setIsWorkExpanded(!isWorkExpanded);
  };

  const workExperiences = [
    {
      id: 1,
      company: 'MakeOver Solutions',
      logo: logo,
      role: 'MERN Stack Developer',
      duration: 'July 2024  - PRESENT',
      location: 'Indore, Madhya Pradesh',
      description: 'As a MERN Stack Developer, I am responsible for building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I work on developing admin dashboards, designing responsive front-end interfaces, and creating scalable RESTful APIs to ensure smooth client-server communication.'
    },
    // You can add more work experiences here
     {
      id: 2,
      company: 'CodeBetter',
      logo: logo1,
      role: 'MERN Stack Developer Intern',
      duration: ' April 2023  - November 2023',
      location: 'Indore, Madhya Pradesh',
      description: 'As a MERN Stack Developer Intern at CodeBetter, I gained hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I worked on developing admin dashboards, responsive front-end interfaces, and RESTful APIs, which helped me strengthen my skills in real-world projects and understand end-to-end web development.'
    },
     {
      id: 3,
      company: 'Infosys',
      logo: infosys,
      role: 'JavaScript Intern',
      duration: 'July 2024 ',
      location: 'Online Internship',
      description: 'I am learning JavaScript online from Infosys to improve my programming skills. This course helps me understand coding concepts and build web applications.'
    },
  ];

  return (
    <div className="work-experience-container">
      <div className="left-illustration">
        <img 
          src={image}
          alt="Professional looking in mirror illustration" 
          className="illustration-image"
        />
      </div>
      
      <div className="right-content">
        <h1 className="section-title">Work Experience</h1>
        
        <div className="section-header" onClick={toggleWorkExperience}>
          <h2>Work</h2>
          <span className={`expand-icon ${isWorkExpanded ? 'expanded' : ''}`}>
            {isWorkExpanded ? '−' : '+'}
          </span>
        </div>
        
        {isWorkExpanded && (
          <div className="experience-cards">
            {workExperiences.map((experience) => (
              <div key={experience.id} className="experience-card">
                <div className="company-logo">
                  <img src={experience.logo} alt={`${experience.company} logo`} />
                </div>
                <div className="experience-details">
                  <div className="experience-header">
                    <h3>{experience.role}</h3>
                    <p className="duration">{experience.duration}</p>
                  </div>
                  <p className="company-name">{experience.company}</p>
                  <p className="location">{experience.location}</p>
                  <p className="description">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;