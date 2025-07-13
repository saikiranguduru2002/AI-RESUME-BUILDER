/*// src/components/AuthForm.jsx
import React, { useState, useEffect, useRef } from "react";

import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/auth.css";

function AuthForm({ formType, setFormType }) {
  const [email, setEmail] = useState("");
  const formRef = useRef(null);
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setFormType("");
    }
  };

  if (formType) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [formType]);


  const handleForgotSubmit = (e) => {
    e.preventDefault();
    alert(`Reset instructions sent to ${email}`);
    setFormType("");
  };

  return (
    <>
      {formType && (
        <div className="form-container">
          <div className="form-card" ref={formRef}>
            <button className="close-button" onClick={() => setFormType("")}>X</button>
            <img src={logo} alt="Logo" className="form-logo" />
            {formType === "login" && (
              <>
                <h2>Login Form</h2>
                <h3>Make your AI Resume</h3>
                <form>
                  <input type="email" placeholder="Email" required /><br />
                  <input type="password" placeholder="Password" required /><br />
                  <p className="link" onClick={() => setFormType("forgot")}>Forgot your password?</p>
                  <button id="loginbut" type="submit">Login</button>
                  <p id="retosignup">
                    Don't have an account?{" "}
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setFormType("signup");
                    }}>
                      Sign up
                    </a>
                  </p>
                </form>
              </>
            )}

            {formType === "signup" && (
              <>
                <h2>Signup Form</h2>
                <h3>Make your AI Resume</h3>
                <form>
                  <input type="text" placeholder="Name" required /><br />
                  <input type="email" placeholder="Email" required /><br />
                  <input type="password" placeholder="Password" required /><br />
                  <button id="signupbut" type="submit">Signup</button>
                  <p id="retologin">
                    Already have an account?{" "}
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setFormType("login");
                    }}>
                      Login
                    </a>
                  </p>
                </form>
              </>
            )}

            {formType === "forgot" && (
              <>
                <h2>Forgot your password?</h2>
                <form onSubmit={handleForgotSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /><br />
                  <button id="resetbut" type="submit">Send me reset password instructions</button>
                  <p id="links">
                    <span className="link" onClick={() => setFormType("login")}>Login</span> | <span className="link" onClick={() => setFormType("signup")}>Sign Up</span>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthForm;
*/
/*
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import
import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/auth.css";

function AuthForm({ formType, setFormType }) {
  const [email, setEmail] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate(); // ✅ init

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormType("");
      }
    };

    if (formType) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formType]);

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    alert(`Reset instructions sent to ${email}`);
    setFormType("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add login validation logic here if needed
    localStorage.setItem("loggedIn", "true");
     setFormType(""); 
    navigate("/dashboard"); // ✅ redirect to dashboard
  };

  return (
    <>
      {formType && (
        <div className="form-container">
          <div className="form-card" ref={formRef}>
            <button className="close-button" onClick={() => setFormType("")}>X</button>
            <img src={logo} alt="Logo" className="form-logo" />

            {formType === "login" && (
              <>
                <h2>Login Form</h2>
                <h3>Make your AI Resume</h3>
                <form onSubmit={handleLogin}>
                  <input type="email" placeholder="Email" required /><br />
                  <input type="password" placeholder="Password" required /><br />
                  <p className="link" onClick={() => setFormType("forgot")}>Forgot your password?</p>
                  <button id="loginbut" type="submit">Login</button>
                  <p id="retosignup">
                    Don't have an account?{" "}
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setFormType("signup");
                    }}>
                      Sign up
                    </a>
                  </p>
                </form>
              </>
            )}

            {formType === "signup" && (
              <>
                <h2>Signup Form</h2>
                <h3>Make your AI Resume</h3>
                <form>
                  <input type="text" placeholder="Name" required /><br />
                  <input type="email" placeholder="Email" required /><br />
                  <input type="password" placeholder="Password" required /><br />
                  <button id="signupbut" type="submit">Signup</button>
                  <p id="retologin">
                    Already have an account?{" "}
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setFormType("login");
                    }}>
                      Login
                    </a>
                  </p>
                </form>
              </>
            )}

            {formType === "forgot" && (
              <>
                <h2>Forgot your password?</h2>
                <form onSubmit={handleForgotSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /><br />
                  <button id="resetbut" type="submit">Send me reset password instructions</button>
                  <p id="links">
                    <span className="link" onClick={() => setFormType("login")}>Login</span> | <span className="link" onClick={() => setFormType("signup")}>Sign Up</span>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthForm;
*/
/*import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/auth.css";

function AuthForm({ formType, setFormType }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormType("");
        setError(""); // Clear error when form closes
      }
    };

    if (formType) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formType]);
  useEffect(() => {
  // Clear inputs and error when formType changes (e.g., when opening login/signup again)
      setName("");
      setEmail("");
      setPassword("");
      setError("");
  }, [formType]);

  // ✅ Handle Signup
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setFormType("login"); // Switch to login
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  // ✅ Handle Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (email !== storedUser.email) {
      setError("Email doesn't match");
    } else if (password !== storedUser.password) {
      setError("Password doesn't match");
    } else {
      localStorage.setItem("loggedIn", "true");
      setFormType("");
      navigate("/dashboard");
    }
  };

  return (
    <>
      {formType && (
        <div className="form-container">
          <div className="form-card" ref={formRef}>
            <button className="close-button" onClick={() => setFormType("")}>
              X
            </button>
            <img src={logo} alt="Logo" className="form-logo" />
           
            {formType === "login" && (
                <>
                  <h2>Login Form</h2>
                  <h3>Make your AI Resume</h3>
                  <form onSubmit={handleLoginSubmit}>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    /><br />

                    
                    <p className="link" onClick={() => setFormType("forgot")}>
                      Forgot your password?
                    </p>

                    {error && <p className="error-message">{error}</p>}

                    <button id="loginbut" type="submit">Login</button>
                    <p id="retosignup">
                      Don't have an account?{" "}
                      <a href="#" onClick={(e) => {
                        e.preventDefault();
                        setFormType("signup");
                      }}>
                        Sign up
                      </a>
                    </p>
                  </form>
                </>
              )}

            
            {formType === "signup" && (
              <>
                <h2>Signup Form</h2>
                <form onSubmit={handleSignupSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  /><br />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  /><br />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  /><br />
                  <button id="signupbut" type="submit">Signup</button>
                  <p id="retologin">
                    Already have an account?{" "}
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setFormType("login");
                      setError("");
                    }}>
                      Login
                    </a>
                  </p>
                </form>
              </>
            )}

            
            {formType === "forgot" && (
              <>
                <h2>Forgot your password?</h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Reset link sent to ${email}`);
                  setFormType("login");
                }}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  /><br />
                  <button id="resetbut" type="submit">Send me reset link</button>
                  <p id="links">
                    <span className="link" onClick={() => setFormType("login")}>Login</span> |{" "}
                    <span className="link" onClick={() => setFormType("signup")}>Sign Up</span>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthForm;
*/
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_transparent_cleaned.png";
import "../styles/auth.css";

function AuthForm({ formType, setFormType }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [email, setEmail] = useState(""); // for forgot
  const [error, setError] = useState("");

  const formRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormType("");
      }
    };
    if (formType) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formType]);

  // ✅ Reset form values when form opens
  useEffect(() => {
    setLoginEmail("");
    setLoginPassword("");
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
    setEmail("");
    setError("");
  }, [formType]);

  // ✅ Handle signup
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === signupEmail);

    if (existingUser) {
      setError("Email is already registered. Please log in.");
      return;
    }

    users.push({ name: signupName, email: signupEmail, password: signupPassword });
    localStorage.setItem("users", JSON.stringify(users));
    setFormType("login");
  };

  // ✅ Handle login
  const handleLoginSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.email === loginEmail);

  if (!existingUser) {
    setError("Email is not registered. Please sign up first.");
    return;
  }

  if (existingUser.password !== loginPassword) {
    setError("Incorrect password. Please try again.");
    return;
  }

  // ✅ Save login info
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({ name: existingUser.name, email: existingUser.email })
  );

  setFormType("");
  navigate("/dashboard");
};


  // ✅ Handle forgot password
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    alert(`Reset instructions sent to ${email}`);
    setFormType("");
  };

  return (
    <>
      {formType && (
        <div className="form-container">
          <div className="form-card" ref={formRef}>
            <button className="close-button" onClick={() => setFormType("")}>X</button>
            <img src={logo} alt="Logo" className="form-logo" />

            {/* ✅ Login Form */}
            {formType === "login" && (
              <>
                <h2>Login Form</h2>
                <h3>Make your AI Resume</h3>
                <form onSubmit={handleLoginSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  /><br />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  /><br />

                  {error && <p className="error-message">{error}</p>}

                  <p className="link" onClick={() => setFormType("forgot")}>
                    Forgot your password?
                  </p>

                  <button id="loginbut" type="submit">Login</button>
                  <p id="retosignup">
                    Don't have an account?{" "}
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setFormType("signup");
                    }}>
                      Sign up
                    </a>
                  </p>
                </form>
              </>
            )}

            {/* ✅ Signup Form */}
            {formType === "signup" && (
              <>
                <h2>Signup Form</h2>
                <h3>Make your AI Resume</h3>
                <form onSubmit={handleSignupSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  /><br />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  /><br />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  /><br />

                  {error && <p className="error-message">{error}</p>}

                  <button id="signupbut" type="submit">Signup</button>
                  <p id="retologin">
                    Already have an account?{" "}
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setFormType("login");
                    }}>
                      Login
                    </a>
                  </p>
                </form>
              </>
            )}

            {/* ✅ Forgot Password Form */}
            {formType === "forgot" && (
              <>
                <h2>Forgot your password?</h2>
                <form onSubmit={handleForgotSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /><br />
                  <button id="resetbut" type="submit">Send me reset password instructions</button>
                  <p id="links">
                    <span className="link" onClick={() => setFormType("login")}>Login</span> |{" "}
                    <span className="link" onClick={() => setFormType("signup")}>Sign Up</span>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthForm;


