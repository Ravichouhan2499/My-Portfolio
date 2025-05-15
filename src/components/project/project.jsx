import React, { useState } from 'react';
import './project.css';
import projectImg from '../../assets/images/experience.png'; // you can change this
import logo from '../../assets/images/sitelogo.jpg';
import projLogo2 from '../../assets/images/avantika.png';
import holistic from '../../assets/images/holistic.png';
import sp from '../../assets/images/stovker.png';

const ProjectExperience = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  const projects = [
    {
      id: 1,
      name: 'Makeover Admin Dashboard + APIs',
      logo: logo,
      duration: 'July 2024 - April 2025',
      techStack: 'React, Node.js, Express, MongoDB, firebase',
      description: 'I have developed an admin dashboard for Makeover Solution, which integrates all the APIs built for the mobile app. This dashboard enables seamless management and performance tracking of customers, salon partners, and other stakeholders. It provides easy calculations and insights such as total payments received, the number of customers, the count of salon partners added, and troubleshooting issues like why salon partners are not accepting online bookings from customers. Essentially, all functionalities supported by the Makeover Solution website APIs are fully managed and monitored through this admin panel.',
    },
    {
      id: 2,
      name: 'Avantika Vacation Website + Admin Panel',
      logo: projLogo2,
      Link : 'https://avantikavacations.com/',
      duration: 'Nov 2024 - Jan 2025',
      techStack: 'React , Firebase , Node.js, Express' ,
      description: 'Build a website for a travel agency to manage all trip transactions, track every agent, and monitor each agent’s trips. The system should calculate total bookings and payments while providing easy management and reporting for the agency.',
    },
    {
      id: 3,
      name: 'Makeover Solutions Website',
      logo: logo,
      Link : 'https://makeoversolution.in/',
      duration: 'Sept 2024 - Nov 2024',
      techStack: 'React, firebase',
      description: 'I designed and developed the official website for Makeover Solution, a company specializing in beauty and personal care services. The website was crafted to reflect the brand’s elegant and professional identity while ensuring a seamless and user-friendly experience.',
    },
        {
      id: 4,
      name: 'Holistic Wellbeing Website',
      logo: holistic,
      Link : 'https://www.holisticwell-beingsolutions.com/',
      duration: 'Sept 2024 - Nov 2024',
      techStack: 'React Js',
      description: 'I developed a website aimed at connecting doctors with patients, specifically those seeking mental health support. The platform is designed to make it easier for individuals experiencing mental distress to reach out to qualified professionals in a safe, accessible, and user-friendly environment.',
    },
       {
      id: 5,
      name: 'SuloWise Capital',
      logo: sp,
      Link : 'https://www.sptiwari.in/',
      duration: 'December 2024',
      techStack: 'React Js',
      description: 'I developed a website for a stock market and trading mentor who offers their own courses and guidance. The platform provides information on stock trading, investment strategies, and allows users to explore and purchase courses online.',
    },
  ];

  return (
    <div className="project-experience-container">
      <div className="project-left-illustration">
        <img src={projectImg} alt="Project illustration" className="project-illustration-image" />
      </div>

      <div className="project-right-content">
        <h1 className="project-section-title">Projects</h1>
        <h4>My projects makes use of vast variety of latest technology tools. My best experience is to create Data projects and deploy them to web applications using cloud infrastructure.</h4>

        <div className="project-section-header" onClick={toggleProjects}>
          <h2>My Projects</h2>
          <span className={`project-expand-icon ${isExpanded ? 'expanded' : ''}`}>
            {isExpanded ? '−' : '+'}
          </span>
        </div>

        {isExpanded && (
          <div className="project-cards">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-logo">
                  <img src={project.logo} alt={`${project.name} logo`} />
                </div>
                <div className="project-details">
                  <div className="project-header">
                    <h3>{project.name}</h3>
                   
                    <p className="project-duration">{project.duration}</p>
                  </div>
                    <a href={project.Link} target="_blank" rel="noopener noreferrer" className="project-link">
  {project.Link}
</a>
                  <p className="project-tech">{project.techStack}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectExperience;
