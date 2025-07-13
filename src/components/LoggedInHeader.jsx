/*// src/components/LoggedInHeader.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

function LoggedInHeader({ onLogout }) {
  const [showLogout, setShowLogout] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="app-header">
      <div className="logo">
        <img src="/logots.png" alt="Logo" />
      </div>
      <div className="title">
        <h3>AI RESUME</h3>
      </div>
      <div className="profile-container" ref={profileRef}>
        <div className="profile-icon" onClick={() => setShowLogout(!showLogout)}>👤</div>
        {showLogout && (
          <div className="logout-popup" onClick={onLogout}>
            <i className="fa-solid fa-right-from-bracket" style={{ marginRight: "8px" }}></i>
            Logout
          </div>
        )}
      </div>
    </header>
  );
}

export default LoggedInHeader;
*/
/*
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/App.css";

function DashboardHeader() {
  const [showLogout, setShowLogout] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // ✅ Remove login flag
    navigate("/"); // ✅ Go back to Home
  };

  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        <h3>AI RESUME</h3>
      </div>
      <div className="profile-container" ref={profileRef}>
        <div className="profile-icon" onClick={() => setShowLogout(!showLogout)}>👤</div>
        {showLogout && (
          <div className="logout-popup" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket" style={{ marginRight: "8px" }}></i>
            Logout
          </div>
        )}
      </div>
    </header>
  );
}

export default DashboardHeader;

*/
// src/components/DashboardHeader.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/App.css";

function DashboardHeader() {
  const [showLogout, setShowLogout] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <header className="app-header">
  <div className="header-content">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>

    <div className="title">
      <h3>AI RESUME</h3>
    </div>

    <div className="profile-container" ref={profileRef}>
      <div
        className="profile-icon"
        onClick={() => setShowLogout(!showLogout)}
      >
        👤
      </div>
      {showLogout && (
        <div className="logout-popup" onClick={handleLogout}>
          <i
            className="fa-solid fa-right-from-bracket"
            style={{ marginRight: "8px" }}
          ></i>
          Logout
        </div>
      )}
    </div>
  </div>
</header>

  );
}

export default DashboardHeader;
