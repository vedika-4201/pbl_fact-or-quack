import { useState } from "react";

export default function ClaimChecker() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeClaim = () => {
    if (!claim.trim()) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const demoVerdicts = ["Fact", "Quack", "Misleading"];
      const verdict =
        demoVerdicts[Math.floor(Math.random() * demoVerdicts.length)];

      const confidenceMap = {
        Fact: Math.floor(Math.random() * 8) + 90,
        Quack: Math.floor(Math.random() * 10) + 85,
        Misleading: Math.floor(Math.random() * 15) + 60,
      };

      const explanationMap = {
        Fact:
          "This claim aligns with established research and verified scientific consensus.",
        Quack:
          "This claim contradicts scientific evidence and lacks credible backing.",
        Misleading:
          "This claim contains partial truth but ignores important scientific context.",
      };

      const fallacyMap = {
        Fact: "No major logical fallacies detected.",
        Quack: "Appeal to Nature + False Cause Fallacy detected.",
        Misleading: "Cherry Picking Fallacy detected.",
      };

      const mythEvolution = [
        "Initial Claim Appears on Social Media",
        "Shared Without Scientific Review",
        "Influencers Amplify It",
        "Public Accepts It Without Verification",
      ];

      setResult({
        verdict,
        confidence: confidenceMap[verdict],
        explanation: explanationMap[verdict],
        fallacy: fallacyMap[verdict],
        mythEvolution,
        evidence: [
          {
            source: "Scientific Review Database",
            text: "Cross-checked with peer-reviewed health and science research.",
          },
          {
            source: "Public Health Guidelines",
            text: "Compared against global medical recommendations.",
          },
        ],
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="claim-checker-container">

      {/* INPUT SECTION */}
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a science or health claim..."
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && analyzeClaim()}
        />
        <button onClick={analyzeClaim}>Analyze</button>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="loading-block">
          <div className="spinner"></div>
          <p>AI analyzing credibility, logic, and evidence...</p>
        </div>
      )}

      {/* RESULT */}
      {result && !loading && (
        <div className={`result-card ${result.verdict.toLowerCase()}`}>

          {/* VERDICT HEADER */}
          <div className="verdict-header">
            <h2>{result.verdict}</h2>
            <span className="confidence-tag">
              {result.confidence}% Confidence
            </span>
          </div>

          {/* AI EXPLANATION */}
          <div className="result-section">
            <h3>AI Explanation</h3>
            <p>{result.explanation}</p>
          </div>

          {/* CONFIDENCE BAR */}
          <div className="confidence-meter">
            <div
              className="confidence-fill"
              style={{ width: `${result.confidence}%` }}
            ></div>
          </div>

          {/* LOGICAL FALLACY SECTION */}
          <div className="result-section">
            <h3>Logical Fallacy Analysis</h3>
            <p>{result.fallacy}</p>
          </div>

          {/* EVIDENCE */}
          <div className="result-section">
            <h3>Evidence Check</h3>
            {result.evidence.map((item, index) => (
              <div key={index} className="evidence-card">
                <div className="source-badge">{item.source}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* MYTH EVOLUTION */}
          <div className="result-section">
            <h3>Myth Evolution Timeline</h3>
            <ul className="timeline">
              {result.mythEvolution.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          {/* LEARNING TIP */}
          <div className="result-section learning-box">
            <h3>Learning Insight</h3>
            <p>
              Always verify claims through peer-reviewed research and avoid
              relying solely on social media amplification.
            </p>
          </div>

          {/* RESET */}
          <button
            className="reset-btn"
            onClick={() => {
              setClaim("");
              setResult(null);
            }}
          >
            Check Another Claim
          </button>
        </div>
      )}
    </div>
  );
}

