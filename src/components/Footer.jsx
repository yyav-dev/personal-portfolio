import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="brand-name">Karthicyadhav</span>. All rights reserved.
        </p>

        <div className="footer-icons">
          <a href="https://github.com/yyav-dev" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/karthicyadhav-s-developer/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
