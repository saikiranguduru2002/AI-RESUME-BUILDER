

import React from "react";
import "../styles/auth.css";
import logo from "../assets/logo_transparent_cleaned.png";
import JobFeatures from "../components/JobFeatures"; // 3rd boy component

function Home({ setFormType }) {

  return (
    <div className="content">
    
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>


      <div className="main-section">
    
        <div className="text-content">
          <h1>Welcome To The<br /> AI Resume Portal</h1>
          <h3>Explore The New Features Of Our Portal</h3>
          <p className="par">
            Join Innovators Tech Solutions to connect with top companies <br />
            and explore job opportunities. Use our patented resume builder, <br />
            create a standout portfolio, and find jobs with AI-powered <br />
            matching—all in one platform.
          </p>
          <div>
            <button className="cn" onClick={() => setFormType("signup")}>
              Sign Up Now
            </button>

          </div>
        </div>

     
        <div className="img">
          <img
            src="https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg?semt=ais_hybrid&w=740"
            alt="AI Resume"
            className="resume-img"
          />
        </div>
      </div>

     
      <div className="job-features-wrapper">
        <JobFeatures />
      </div>
    </div>
  );
}

export default Home;

