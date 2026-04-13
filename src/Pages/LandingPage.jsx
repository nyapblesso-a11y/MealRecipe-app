import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Master Your Kitchen with <span>FlavorNode</span>
          </h1>
          <p className="hero-subtitle">
            The intelligent recipe engine designed for modern chefs. 
            Organize, discover, and build your digital cookbook in seconds.
          </p>
          
          <div className="actions">
            <button className="primary-btn" onClick={() => navigate("/recipes")}>
              Get Started — It's Free
            </button>
            <button className="secondary-btn" onClick={() => navigate("/recipes")}>
              Browse Recipes
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card">
            <img src="https://img.icons8.com/color/144/null/restaurant.png" alt="Logo" />
            <h3>FlavorNode v1.0</h3>
            <p>Ready to cook?</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;