import React, { useEffect, useState } from 'react';
import CollegeLogo from '../../assets/images/collegeLogo.png';
import CodeBetter from '../../assets/images/CodeBetter.png';
import Universal from '../../assets/images/universal.png';
import infosys from '../../assets/images/infosys.png';
import cap from '../../assets/images/capp.png';
import './education.css'

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`education-container ${isVisible ? 'fade-in' : ''}`}>
      <div className={`education-header ${isVisible ? 'slide-down' : ''}`}>
        <div className="education-cap-wrapper">
          <img
            src={cap}
            alt="Graduation Cap"
            className="education-cap"
          />
        </div>
        <h1>Education</h1>
        <div className="underline"></div>
        <h2>Basic Qualification and Certifications</h2>
      </div>

      <div className={`degree-section ${isVisible ? 'slide-up' : ''}`}>
        <h2>Degrees Received</h2>
        <div className="degree-card">
          <div className="degree-card-inner">
            <div className="college-logo-container">
              <img
                src={CollegeLogo}
                alt="College Logo"
                className="college-logo"
              />
            </div>
            <div className="degree-content">
              <h3>SAGE UNIVERSITY INDORE</h3>
              <p className="duration"><b>2021 - 2023</b></p>
              <div className="achievement">
                <span className="bullet">⚡</span>
                <p>I have studied advanced computer science subjects such as Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, and Software Engineering..</p>
              </div>
              <div className="achievement">
                <span className="bullet">⚡</span>
                <p>Additionally, I have completed coursework and projects in areas like Web Technologies, Java Programming, Cloud Computing, and Full Stack Development.</p>
              </div>
              <a href="https://sageuniversity.in/" target="_blank" rel="noopener noreferrer" className="visit-button">
                Visit Website
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`certifications-section ${isVisible ? 'slide-up delay-1' : ''}`}>
        <h2>Certifications</h2>
        <div className="certificates-container">
          <div className="certificate-card">
            <div className="certificate-logo">
              <img src={CodeBetter} alt="HackerRank" />
            </div>
            <div className="certificate-content">
              <h3>Full Stack Web Development</h3>
              <p className="issuer">CodeBetter</p>
              <p className="issue-date">July 2023</p>
              <div className="skills">
                <span>MongoDB</span>
                <span>Express Js</span>
                <span>React</span>
                <span>Node.js</span>
                
              </div>
            <span
  className="certificate-link"
  onClick={() => openImageModal("/certificate/MernCertificate.jpg")}
  style={{ cursor: 'pointer' }}
>
  View Certificate
</span>

            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-logo">
              <img src={Universal} alt="freeCodeCamp" />
            </div>
            <div className="certificate-content">
              <h3>C & C++ </h3>
              <p className="issuer">Universal Informatics</p>
              <p className="issue-date">Dec 2022</p>
              <div className="skills">
                <span>C</span>
                <span>C++</span>
                <span>oops</span>
              </div>
                <span
  className="certificate-link"
  onClick={() => openImageModal("/certificate/Infosys.png")}
  style={{ cursor: 'pointer' }}
>
  View Certificate
</span>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-logo">
              <img src={infosys} alt="AWS" />
            </div>
            <div className="certificate-content">
              <h3>JavaScript</h3>
              <p className="issuer">Infosys</p>
              <p className="issue-date">December 2022</p>
              <div className="skills">
                <span>Classes</span>
                <span>Objects</span>
                <span>Functions</span>
                <span>JavaScript</span>
              </div>
                              <span
  className="certificate-link"
  onClick={() => openImageModal("/certificate/Infosys.png")}
  style={{ cursor: 'pointer' }}
>
  View Certificate
</span>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
  <div className="modal-overlay" onClick={closeImageModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedImage} alt="Certificate" />
      <button className="close-button" onClick={closeImageModal}>✖</button>
    </div>
  </div>
)}

    </div>

    
  );
};

export default Education;