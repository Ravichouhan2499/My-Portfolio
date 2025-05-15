import React from "react";
import "./contact.css";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import address from "../../assets/images/address.png";
import profile from "../../assets/images/profile.jpg";

const ContactCard = () => {
  return (
    <div className="contact-card">
      {/* Top Section */}
      <div className="contact-top-section">
        <div className="profile-image-container">
          {/* This is a placeholder for your image */}
           <img 
                      src={profile}
                      alt="Professional looking in mirror illustration" 
                      className="address-image"
                    />
          
        </div>
        
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p className="contact-subtitle">
            I am available on almost every social media. You can message me, I will
            reply within 24 hours. I can help you with Java, Front end, React,
            Backend and databases.
          </p>
          
          {/* Social Media Icons */}
         
         <div className="social-icons-container-1">
           <a href="https://github.com/Ravichouhan2499" target="_blank" className="social-icon github" aria-label="GitHub">
             <FaGithub />
           </a>
           <a href="https://www.linkedin.com/in/ravi-chouhan-a788411a0/" target="_blank" className="social-icon linkedin" aria-label="LinkedIn">
             <FaLinkedinIn />
           </a>
           <a href="mailto:ravichouhan2499@gmail.com" className="social-icon google" aria-label="Email">
             <FaGoogle />
           </a>
           <a href="https://t.me/ravi_chouhan_2499" target="_blank" className="social-icon telegram" aria-label="Telegram">
             <FaTelegram />
           </a>
           <a href="https://www.facebook.com/profile.php?id=100004951338493" target="_blank" className="social-icon facebook" aria-label="Facebook">
             <FaFacebookF />
           </a>
           <a href="https://www.instagram.com/ravi_chouhan_2499/" target="_blank" className="social-icon instagram" aria-label="Instagram">
             <FaInstagram />
           </a>
         </div>
          
          {/* Resume Button */}
          <div className="resume-button-container">
            <a href="/certificate/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
  See My Resume
</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="contact-bottom-section">

         <div className="contact-right">
          <div className="contact-info">
            <div className="info-section">
              <h2>Address</h2>
              <p>
                H. No. 128, Ward no 12, Gate no 7, Nepanagar,
                Dist.-Burhanpur, Madhya Pradesh – 450221
              </p>
            </div>
            
            <div className="info-section">
              <h2>Phone Number</h2>
              <p className="phone">+91 7389789563</p>
            </div>
            
            <div className="button-container">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                <span className="map-icon">📍</span>
                Visit on Google Maps
              </a>
            </div>
          </div>
        </div>


        <div className="contact-left">
          <div className="envelope-container">
             <img 
                      src={address}
                      alt="Professional looking in mirror illustration" 
                      className="address-image"
                    />
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ContactCard;