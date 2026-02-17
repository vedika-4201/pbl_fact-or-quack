const steps = [
  { text: "Claim appears on social media", icon: "📱" },
  { text: "Shared without verification", icon: "🔄" },
  { text: "Influencers amplify it", icon: "⭐" },
  { text: "Mainstream confusion spreads", icon: "🌪️" },
  { text: "Fact-checkers respond", icon: "✅" },
  { text: "Claim corrected", icon: "📰" },
];

export default function MythEvolution() {
  return (
    <div className="page-container-upgraded">
      <header className="page-header">
        <h1>🧬 Myth Evolution Timeline</h1>
        <p>Follow the journey of misinformation from start to bust!</p>
      </header>

      <div className="timeline-horizontal">
        {steps.map((s, i) => (
          <div key={i} className="timeline-step">
            <div className="timeline-icon">{s.icon}</div>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
