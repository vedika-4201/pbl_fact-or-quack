import { useState } from "react";

export default function LearningHub() {
  const modules = [
    {
      title: "How to Identify Fake Claims",
      content:
        "Check source credibility, evidence quality, and emotional manipulation tactics.",
    },
    {
      title: "Understanding Scientific Consensus",
      content:
        "Scientific truth is based on peer-reviewed research, not viral popularity.",
    },
    {
      title: "Red Flags in Misinformation",
      content:
        "Watch for exaggerated language, miracle cures, and conspiracy framing.",
    },
    {
      title: "Critical Thinking Tips",
      content:
        "Ask questions, verify claims, and never trust viral posts blindly.",
    },
    {
      title: "Fact-Checking Tools",
      content:
        "Use sites like Snopes, FactCheck.org, and official government health portals.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="page-container-upgraded">
      <header className="page-header">
        <h1>📚 Learning Hub</h1>
        <p>Expand each module to learn more about spotting misinformation.</p>
      </header>

      <div className="accordion-container">
        {modules.map((m, i) => (
          <div 
            key={i} 
            className={`accordion-card ${openIdx === i ? "open" : ""}`}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className="accordion-title">
              <h3>{m.title}</h3>
              <span>{openIdx === i ? "▲" : "▼"}</span>
            </div>
            <div className="accordion-content">
              <p>{m.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  