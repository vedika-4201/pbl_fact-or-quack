import { Link } from "react-router-dom";
import ClaimChecker from "./ClaimChecker";
import { useEffect } from "react";

export default function Home() {

  // Floating duck slight animation trigger
  useEffect(() => {
    const duck = document.querySelector(".floating-duck");
    if (duck) {
      setInterval(() => {
        duck.classList.toggle("duck-bounce");
      }, 3000);
    }
  }, []);

  return (
    <div className="home-container-new">

      {/* SPLIT HERO SECTION */}
      <section className="hero-split">

        <div className="hero-left">
          <h1>
            Detect Truth.
            <br />
            Destroy <span className="highlight">Misinformation.</span>
          </h1>

          <p>
            AI-powered myth detection engine built for health & science claims.
          </p>

          <div className="hero-buttons">
            <a href="#analyzer" className="primary-btn">
              Start Checking →
            </a>
            <Link to="/challenge" className="secondary-btn">
              Try Rapid Fire 🔥
            </Link>
          </div>

          <div className="floating-stats">
            <div className="stat-card">
              <h3>12,482+</h3>
              <p>Claims Checked</p>
            </div>

            <div className="stat-card">
              <h3>4,931</h3>
              <p>Myths Busted</p>
            </div>

            <div className="stat-card">
              <h3>98%</h3>
              <p>Accuracy</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="orb orb1"></div>
            <div className="orb orb2"></div>
            <div className="orb orb3"></div>
            <div className="floating-duck">🦆</div>
          </div>
        </div>

      </section>

      {/* CLAIM CHECKER */}
      <section id="analyzer" className="analyzer-wrapper-new">
        <ClaimChecker />
      </section>

      {/* FEATURE CARDS */}
      <section className="features-new">

        <Link to="/quiz" className="feature-card-new">
          <h3>🧠 Quiz Mode</h3>
          <p>Test your myth-detection skills.</p>
        </Link>

        <Link to="/facts" className="feature-card-new">
          <h3>🎲 Random Facts</h3>
          <p>Explore surprising science truths.</p>
        </Link>

        <Link to="/challenge" className="feature-card-new">
          <h3>🔥 Rapid Fire</h3>
          <p>Speed round. No overthinking.</p>
        </Link>

      </section>

      {/* TRENDING */}
      <section className="trending-new">
        <h2>🔥 Trending Claims</h2>

        <div className="trend-grid">
          <div className="trend-card-new quack">
            Detox teas remove toxins.
          </div>
          <div className="trend-card-new fact">
            Drinking water improves hydration.
          </div>
          <div className="trend-card-new misleading">
            Eggs dramatically increase cholesterol.
          </div>
        </div>
      </section>

    </div>
  );
}
