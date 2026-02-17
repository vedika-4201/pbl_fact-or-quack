import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ClaimChecker from "./ClaimChecker";

function Dashboard({ setIsLoggedIn }) {
  return (
    <div className="pinterest-dashboard">
      <aside className="glass-sidebar">
        <div className="brand-zone">
          <h2 className="brand-name">
            Fact<span>or</span>Quack
          </h2>
        </div>

        <nav className="side-nav">
  
  <Link to="/learning" className="nav-item">📚 Learning Hub</Link>
  <Link to="/fallacies" className="nav-item">🧠 Fallacies</Link>
  <Link to="/myth" className="nav-item">🧬 Myth Evolution</Link>
  <Link to="/history" className="nav-item">📜 History</Link>
  
  <Link to="/quiz" className="nav-item">🧠 Quiz</Link>
  <Link to="/facts" className="nav-item">🎲 Facts</Link>
  <Link to="/challenges" className="nav-item">🔥 Challenges</Link>
</nav>


        <button
          className="logout-minimal"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      </aside>

      <main className="content-stage">
        <div className="glitter-ticker center-ticker">
          ⚡ Most "carrots help eyesight" campaigns were WWII propaganda.
        </div>

        <header className="main-header">
          <h1>
            Welcome Back <span className="sparkle">✨</span>
          </h1>
          <p>Let’s debunk something today.</p>
        </header>

        {/* Claim Checker Expanded */}
        <div className="bento-layout">
          <div className="bento-item checker-card-expanded">
            <ClaimChecker />
          </div>
        </div>

        {/* Feature Cards Below */}
        <div className="feature-section">
          <div className="feature-card">
            <h3>🧠 Quiz Mode</h3>
            <p>Test your myth-detection skills.</p>
            <Link to="/quiz">
              <button className="fancy-btn">Play →</button>
            </Link>
          </div>

          <div className="feature-card">
            <h3>🎲 Random Facts</h3>
            <p>Explore surprising science truths.</p>
            <Link to="/facts">
              <button className="fancy-btn">Explore →</button>
            </Link>
          </div>

          <div className="feature-card">
            <h3>🔥 Rapid Fire</h3>
            <p>Speed round. No overthinking.</p>
            <Link to="/challenges">
              <button className="fancy-btn">Play →</button>
            </Link>
          </div>
        </div>

        <div className="bento-layout">
          <div className="bento-item mini-shocker upgraded-shocker">
            🤯 Drinking 8 glasses of water daily is not a scientific rule.
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;


