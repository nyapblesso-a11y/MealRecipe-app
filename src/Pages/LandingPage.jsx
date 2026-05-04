import React from "react";
import { useNavigate } from "react-router-dom";
import "./page.css";
import TypewriterComponent from "typewriter-effect";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
    <header className="main-header">
      <div className="header-inner">
        <div className="logo" onClick={() => navigate("/")}>
          FlavorNode<span>.</span>
        </div>
        
        <div className="header-actions">
        <span className="login-btn" onClick={() => navigate("/recipes")}>Recipes</span>
          <button className="nav-primary-btn" onClick={() => navigate("/recipes")}>
            Join Pro
          </button>
        </div>
      </div>
    </header>
    <div className="landing-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Master Your <br />
            <span>
              {" "}
              <TypewriterComponent
                options={{
                  strings: [
                    "Digital Cookbook",
                    "Culinary Workflow",
                    "Kitchen Creativity",
                    "Secret Recipes",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-text",
                }}
              />
            </span>
          </h1>
          <p className="hero-subtitle">
            FlavorNode is the modern workspace for your recipes. Ditch the messy folders and build a stunning, searchable digital library in seconds.
          </p>

          <div className="actions">
            <button
              className="primary-btn"
              onClick={() => navigate("/recipes")}
            >
              Get Started — It's Free
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/recipes")}
            >
              Browse Recipes
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card">
            <img
              src="https://images.ctfassets.net/3s5io6mnxfqz/6lmLSgTSH5Lgi7z59asp25/27eaea12087d66e6be41eac392e0f15b/63__Scene_C_DSC01914.jpg?w=828"
              alt="App Preview"
            />
            <div className="glass-footer">
              <h3>FlavorNode Pro</h3>
              <p>Version 1.0.4 - Latest Update</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer className="flavor-footer">
  <div className="footer-content">
    <div className="footer-brand">
      <h2>FlavorNode<span>.</span></h2>
      <p>Stop messing about. Cook with precision.</p>
    </div>
    
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} FlavorNode. Everything else is a distraction.</p>
      <div className="footer-socials">
        <a href="#">YouTube</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}

export default LandingPage;
