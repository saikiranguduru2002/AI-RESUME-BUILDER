// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="left-box">
      <ul className="sidebar-menu">
        <li onClick={() => navigate('/dashboard')}>📊 Dashboard</li>
        <li onClick={() => navigate('/resume')}>📄 Resume Builder</li>
      </ul>
    </div>
  );
}

export default Sidebar;
