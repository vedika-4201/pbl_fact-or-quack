import { useState } from "react";

export default function Fallacies() {
  const [search, setSearch] = useState("");
  const fallacies = [
    { name: "Cherry Picking", example: "Vaccines cause harm because one study said so.", emoji: "🍒" },
    { name: "Appeal to Nature", example: "It's natural, so it must be safe.", emoji: "🌿" },
    { name: "False Cause", example: "I took vitamins and didn’t get sick, so vitamins prevent illness.", emoji: "💊" },
    { name: "Strawman", example: "Misrepresenting someone’s argument to make it easier to attack.", emoji: "🥕" },
    { name: "Ad Hominem", example: "Attacking the person instead of the argument.", emoji: "👤" },
    { name: "Post Hoc", example: "Assuming causation from correlation.", emoji: "⏰" },
    { name: "Slippery Slope", example: "If we allow X, it will lead to Z disaster.", emoji: "🛷" },
    { name: "Bandwagon", example: "Everyone believes it, so it must be true.", emoji: "🚀" },
    { name: "Appeal to Authority", example: "This must be right because a celebrity said so.", emoji: "⭐" },
    { name: "Hasty Generalization", example: "One bad experience proves all experiences are bad.", emoji: "⚡" },
  ];

  const filtered = fallacies.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container-upgraded">
      <header className="page-header">
        <h1>🧠 Logical Fallacies</h1>
        <p>Hover over a card to see the example!</p>
        <input 
          type="text" 
          placeholder="Search fallacy..." 
          value={search} 
          onChange={e => setSearch(e.target.value)}
          className="search-bar"
        />
      </header>

      <div className="cards-grid-upgraded">
        {filtered.map((f, i) => (
          <div key={i} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{f.emoji} {f.name}</h3>
              </div>
              <div className="flip-card-back">
                <p>{f.example}</p>
                <button className="fancy-btn">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  