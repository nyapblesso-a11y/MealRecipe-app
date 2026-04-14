import React from "react";
import { useNavigate } from "react-router-dom";
import "./page.css";
import TypewriterComponent from "typewriter-effect";

function LandingPage() {
  const navigate = useNavigate();

  return (
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
  );
}

export default LandingPage;
