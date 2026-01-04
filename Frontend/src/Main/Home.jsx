import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/Home.css";

// Import the WorkNest Logo for light mode
import logoLight from "../assets/Logo.png"; 
// Import the WorkNest Logo for dark mode (assuming you have it based on previous context)
// If you don't have Logo2.png, you can use logoLight for both or just Logo.png
import logoDark from "../assets/Logo2.png"; 

// Minimal SVG Icon for Theme Toggle
const ThemeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3V21" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21V3Z" fill="currentColor" />
  </svg>
);

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Toggle theme and update body attribute
  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="logo">
          <img 
            src={isDarkMode ? logoDark : logoLight} 
            alt="WorkNest Logo" 
          />
        </div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          {/* Removed Login Button as requested previously */}
          <button className="btn-primary">Sign Up</button>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <ThemeIcon />
          </button>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-text" data-aos="fade-right">
          <h1>
            Manage Tasks, Teams & Productivity <br />
            <span>All in One Place</span>
          </h1>

          <p>
            WorkNest helps students, educators, and professionals stay organized,
            collaborate efficiently, and achieve more — together.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Get Started</button>
          </div>
        </div>

        {/* VISUAL: Floating Dashboard Widgets */}
        <div className="hero-visual" data-aos="fade-left">
          <div className="dashboard-container">
            {/* Widget 1: Task List */}
            <div className="widget-card widget-tasks">
              <div className="widget-header">
                <span className="icon-box">✓</span>
                <div className="lines">
                  <span className="line short"></span>
                  <span className="line long"></span>
                </div>
              </div>
              <div className="task-item"><span className="dot"></span><span className="line"></span></div>
              <div className="task-item"><span className="dot"></span><span className="line"></span></div>
            </div>

            {/* Widget 2: User Profile with Graph */}
            <div className="widget-card widget-profile">
              <div className="profile-header">
                <div className="profile-img"></div>
                <div className="profile-info">
                  <span className="line medium"></span>
                  <span className="line short"></span>
                </div>
              </div>
              <div className="profile-graph">
                <svg viewBox="0 0 100 30">
                  <path d="M0,15 C10,5 25,25 40,10 C55,5 70,20 85,5 C95,0 100,15 100,15 L100,30 L0,30 Z" fill="url(#gradient)" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Widget 3: Analytics Graph */}
            <div className="widget-card widget-analytics">
              <div className="widget-header">
                <span className="icon-box">📊</span>
                <span className="line medium"></span>
              </div>
              <div className="bars">
                <div className="bar" style={{height: '40%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
                <div className="bar" style={{height: '85%'}}></div>
              </div>
            </div>

            {/* Widget 4: Quick Note */}
            <div className="widget-card widget-note">
              <div className="widget-header">
                <span className="icon-box">📝</span>
                <span className="line short"></span>
              </div>
              <div className="note-lines">
                <span className="line full"></span>
                <span className="line full"></span>
                <span className="line medium"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Ready to simplify your work with WorkNest?</h2>
        <div className="cta-actions">
          <button className="btn-primary">Create Account</button>
          <button className="btn-outline btn-cta-outline">Login</button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer" id="contact">
        <p>© {new Date().getFullYear()} WorkNest</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </>
  );
};

export default Home;