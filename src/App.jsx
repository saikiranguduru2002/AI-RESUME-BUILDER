/*// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";

function App() {
  const [formType, setFormType] = useState(""); // "", "login", "signup", "forgot"

  return (
    <div className="App">
      <Header
        onLoginClick={() => setFormType("login")}
        onSignupClick={() => setFormType("signup")}
      />
      <AuthForm formType={formType} setFormType={setFormType} />
    </div>
  );
}

export default App;

// src/App.jsx
// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import Home from "./pages/Home"; // 2nd boy's content merged here

function App() {
  const [formType, setFormType] = useState(""); // "login", "signup", "forgot"
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state

  return (
    <Router>
      
      <Header
        onLoginClick={() => setFormType("login")}
        onSignupClick={() => setFormType("signup")}
      />

      
      <AuthForm
        formType={formType}
        setFormType={setFormType}
        setIsLoggedIn={setIsLoggedIn}
      />

      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
*/
/*
// src/App.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";        // ✅ Footer (4th boy)
import Home from "./pages/Home";                // ✅ 2nd + 3rd boy
// import Dashboard from "./pages/Dashboard";   // 5th boy (later after login)

function App() {
  const [formType, setFormType] = useState(""); // "", "login", "signup", "forgot"
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For login check

  return (
    <Router>
      
      <Header
        onLoginClick={() => setFormType("login")}
        onSignupClick={() => setFormType("signup")}
      />

      
      <AuthForm
        formType={formType}
        setFormType={setFormType}
        setIsLoggedIn={setIsLoggedIn}
      />

    
      <Routes>
        <Route path="/" element={<Home setFormType={setFormType} />} />
      
       
         
      </Routes>

      
      <Footer />
    </Router>
  );
}

export default App;
*/
// src/App.jsx
// App.jsx
/*
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import ResumePreviewPage from './pages/ResumePreviewPage';
import Footer from './components/Footer';
import Home from './pages/Home';
import AuthForm from './components/AuthForm'; // ✅ import this

function App() {
  const [formType, setFormType] = useState(""); // ✅ for login/signup modal

  return (
    <div>
      <Header />
      <AuthForm formType={formType} setFormType={setFormType} /> 
      <div className="main-content">
        <Sidebar />
        <div className="right-box">
          <Routes>
            <Route path="/" element={<Home setFormType={setFormType} />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume" element={<ResumeBuilder />} />
            <Route path="/resume/preview" element={<ResumePreviewPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
*/
/*
import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/LoggedInHeader"; // 5th boy header
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePreviewPage from "./pages/ResumePreviewPage";
import AuthForm from "./components/AuthForm";

function App() {
  const [formType, setFormType] = useState("");
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/resume");
  const isPublicPage = location.pathname === "/";

  return (
    <div>
      
      {isDashboardRoute && isLoggedIn ? (
        <DashboardHeader />
      ) : (
        <Header
          onLoginClick={() => setFormType("login")}
          onSignupClick={() => setFormType("signup")}
        />
      )}

      <Routes>
        <Route path="/" element={<Home setFormType={setFormType} />} />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div className="main-content">
                <Sidebar />
                <div className="right-box">
                  <Dashboard />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/resume"
          element={
            isLoggedIn ? (
              <div className="main-content">
                <Sidebar />
                <div className="right-box">
                  <ResumeBuilder />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/resume/preview"
          element={
            isLoggedIn ? (
              <div className="main-content">
                <Sidebar />
                <div className="right-box">
                  <ResumePreviewPage />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>

      
      {isPublicPage && <Footer />}

      
      < AuthForm formType={formType} setFormType={setFormType} />
    </div>
  );
}

export default App;
*/
import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/LoggedInHeader"; // Dashboard Header
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePreviewPage from "./pages/ResumePreviewPage";
import AuthForm from "./components/AuthForm";

function App() {
  const [formType, setFormType] = useState("");
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/resume");
  const isPublicPage = location.pathname === "/homepage";

  return (
    <div>
      {/* ✅ Conditional Header */}
      {isDashboardRoute && isLoggedIn ? (
        <DashboardHeader />
      ) : (
        <Header
          onLoginClick={() => setFormType("login")}
          onSignupClick={() => setFormType("signup")}
        />
      )}

      <Routes>
        {/* ✅ Redirect root to /homepage */}
        <Route path="/" element={<Navigate to="/homepage" />} />

        <Route
          path="/homepage"
          element={<Home setFormType={setFormType} />}
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div className="main-content">
                <Sidebar />
                <div className="right-box">
                  <Dashboard />
                </div>
              </div>
            ) : (
              <Navigate to="/homepage" />
            )
          }
        />

        <Route
          path="/resume"
          element={
            isLoggedIn ? (
              <div className="main-content">
                <Sidebar />
                <div className="right-box">
                  <ResumeBuilder />
                </div>
              </div>
            ) : (
              <Navigate to="/homepage" />
            )
          }
        />

        <Route
          path="/resume/preview"
          element={
            isLoggedIn ? (
              <div className="main-content">
                <Sidebar />
                <div className="right-box">
                  <ResumePreviewPage />
                </div>
              </div>
            ) : (
              <Navigate to="/homepage" />
            )
          }
        />
      </Routes>

      {/* ✅ Footer only on /homepage */}
      {isPublicPage && <Footer />}

      {/* ✅ Auth Modal */}
      <AuthForm formType={formType} setFormType={setFormType} />
    </div>
  );
}

export default App;
