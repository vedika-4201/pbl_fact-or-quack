import React, { useState } from "react";

function ClaimChecker() {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    if (!claim.trim()) return;

    const response = await fetch("http://localhost:5000/api/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ claim }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="claim-section">ch
      <h2>Check Your Own Claim 🔍</h2>

      <div className="input-row">
        <input
          type="text"
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          placeholder="E.g. Antibiotics cure flu"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCheck();
          }}
        />
        <button onClick={handleCheck}>Check</button>
      </div>

      {result && (
        <div className="result-block">
          <h3>
            Verdict:{" "}
            <span
              className={
                result.verdict === "Fact"
                  ? "result-fact"
                  : "result-quack"
              }
            >
              {result.verdict}
            </span>
          </h3>
          <div className="result-explanation">
            {result.explanation}
          </div>
        </div>
      )}
    </div>
  );
}

export default ClaimChecker;

