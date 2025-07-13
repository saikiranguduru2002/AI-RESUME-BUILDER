// src/components/Footer.jsx
import React from "react";
import "../styles/auth.css";
import logo from "../assets/logo_transparent_cleaned.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="footer-right">
        <h3>Job Search</h3>
        <ul>
          <li><a href="#">Browse Jobs</a></li>
          <li><a href="#">Talent Acquisition</a></li>
          <li><a href="#">Resume Builder</a></li>
          <li><a href="#">ITS AI</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
