import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="page-wrapper" style={{ flexDirection: 'column' }}> {/* Added flex-direction to stack sections */}
        
        {/* MYTH OF THE DAY */}
        <section className="myth-section" style={{ width: '100%', maxWidth: '1000px' }}>
          <div className="myth-card">
            <h4>🧠 Myth of the Day</h4>
            <h2>“We only use 10% of our brain.”</h2>
            <p>
              Brain scans show activity across nearly ALL regions.
              The 10% idea is one of the most persistent myths ever.
            </p>
            <span className="myth-tag">MEGA QUACK 🦆</span>
          </div>
        </section>
  
        {/* FEATURE BOXES */}
        <section className="features" style={{ width: '100%', maxWidth: '1000px' }}>
          <Link to="/quiz" className="feature-card">
            <h3>🧠 Quiz Mode</h3>
            <p>Test your myth-detection skills.</p>
          </Link>
  
          <Link to="/facts" className="feature-card">
            <h3>🎲 Random Facts</h3>
            <p>Explore all the wild truths.</p>
          </Link>
  
          <Link to="/challenge" className="feature-card">
            <h3>🔥 Rapid Fire</h3>
            <p>Speed round. No overthinking.</p>
          </Link>
        </section>
  
      </div>
    );
  }


export default Home;
