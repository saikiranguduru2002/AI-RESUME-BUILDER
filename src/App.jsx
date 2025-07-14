
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
