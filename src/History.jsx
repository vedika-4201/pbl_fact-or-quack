const events = [
  { year: "1930s", event: "Carrots promoted for eyesight during WWII propaganda" },
  { year: "2010", event: "Viral video claims miracle detox teas" },
  { year: "2015", event: "Misinformation spreads on social media" },
  { year: "2020", event: "Fact-checkers use AI to debunk false claims" },
  { year: "2023", event: "Rapid-fire quizzes popular for public awareness" },
];

export default function History() {
  return (
    <div className="page-container-upgraded">
      <header className="page-header">
        <h1>📜 History of Misinformation</h1>
        <p>Learn how myths and false claims have evolved over the years.</p>
      </header>

      <div className="history-grid">
        {events.map((e, i) => (
          <div 
            key={i} 
            className={`history-card ${i % 2 === 0 ? "gradient-purple" : "gradient-red"}`}
          >
            <h3>{e.year}</h3>
            <p>{e.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

