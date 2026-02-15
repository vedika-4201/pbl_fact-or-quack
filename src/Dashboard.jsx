import React from "react";
import "./App.css";
import ClaimChecker from "./ClaimChecker";

function Dashboard({ setIsLoggedIn }) {
  return (
    <div className="pinterest-dashboard">
      {/* Soft Sidebar */}
      <aside className="glass-sidebar">
        <div className="brand-zone">
          <span className="duck-emoji">🐥</span>
          <h2 className="brand-name">Fact<span>or</span>Quack</h2>
        </div>
        <nav className="side-nav">
          <div className="nav-item active">✨ Feed</div>
          <div className="nav-item">📚 Propaganda Lab</div>
          <div className="nav-item">🔍 Deep Scan</div>
        </nav>
        <button className="logout-minimal" onClick={() => setIsLoggedIn(false)}>Logout</button>
      </aside>

      <main className="content-stage">
        {/* Shock Ticker */}
        <div className="glitter-ticker">
          <p>⚡ <b>DID YOU KNOW?</b> Most "carrots help sight" ads were actually 1940s radar secrets! ⚡</p>
        </div>

        <header className="main-header">
          <h1>Welcome, Buster <span className="sparkle">✨</span></h1>
          <p>Ready to unmask some myths today?</p>
        </header>

        <div className="bento-layout">
          {/* Main Verification Card */}
          <div className="bento-item checker-card-pro">
            <div className="card-top">
               <h3>Claim Verification Pipeline</h3>
               <span className="ai-badge">AI Active</span>
            </div>
            <ClaimChecker />
          </div>

          {/* Shock Factor / Rabbit Hole Card */}
          <div className="bento-item rabbit-hole-card">
             <div className="rabbit-content">
                <span className="tag-yellow">THE RABBIT HOLE 🐰</span>
                <h2>Why do we think 7 years for gum to digest?</h2>
                <p>It was a <strong>scare tactic</strong> by parents in the 50s. Science says it passes in days!</p>
                <button className="read-more">Learn History →</button>
             </div>
          </div>

          {/* Quack-O-Meter Card */}
          <div className="bento-item meter-fun-card">
             <h3>Quack-O-Meter</h3>
             <div className="meter-ring-container">
                <div className="meter-base"></div>
                <div className="meter-pointer-hand" style={{transform: 'rotate(-30deg)'}}></div>
             </div>
             <p className="verdict-bubble">Suspicious</p>
          </div>

          {/* Mini Fact Card */}
          <div className="bento-item mini-shocker">
             <p>🤯 <b>SHOCK FACTOR:</b> "Drinking 8 glasses of water" has <b>no</b> scientific basis.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;