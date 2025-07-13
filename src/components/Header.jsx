/*import React, { useState } from "react";
import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/auth.css";

function Header({ onLoginClick, onSignupClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
  <div className="header-left">
    <img src={logo} alt="Logo" className="logo" />
    <h1 className="app-title">AI Resume</h1>
  </div>

  <div className="header-right desktop-buttons">
    <button onClick={onLoginClick}>Login</button>
    <button onClick={onSignupClick}>Sign Up</button>
  </div>

  <div className="header-right mobile-menu">
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </button>
    {menuOpen && (
      <div className="dropdown-menu">
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onSignupClick}>Sign Up</button>
      </div>
    )}
  </div>
</div>

  );
}

export default Header;
*/
import React, { useState } from "react";
import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/auth.css";

function Header({ onLoginClick, onSignupClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      {/* Left: Logo and Title */}
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="app-title">AI Resume</h1>
      </div>

      {/* Right: Desktop Buttons */}
      <div className="header-right desktop-buttons">
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onSignupClick}>Sign Up</button>
      </div>

      {/* Right: Mobile Menu Toggle */}
      <div className="header-right mobile-menu">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {menuOpen && (
          <div className="dropdown-menu">
            <button onClick={() => { setMenuOpen(false); onLoginClick(); }}>
              Login
            </button>
            <button onClick={() => { setMenuOpen(false); onSignupClick(); }}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

