import React, { useState } from "react";

const QUIZ_DATA = {
  Food: [
    { q: "Bananas grow on trees.", a: "myth", info: "They grow on giant herbs!" },
    { q: "White chocolate isn't actually chocolate.", a: "fact", info: "It contains no cocoa solids." },
    { q: "Carrots were originally purple.", a: "fact", info: "Orange ones were bred later in the Netherlands." }
  ],
  Medicine: [
    { q: "Antibiotics kill viruses.", a: "myth", info: "They only work on bacteria." },
    { q: "You use only 10% of your brain.", a: "myth", info: "Brain scans show we use most of it." },
    { q: "Cracking knuckles causes arthritis.", a: "myth", info: "No scientific evidence supports that." }
  ],
  Science: [
    { q: "Goldfish have 3-second memory.", a: "myth", info: "They can remember things for months." },
    { q: "There is no gravity in space.", a: "myth", info: "Astronauts are in freefall." },
    { q: "Diamonds are made from coal.", a: "myth", info: "Most diamonds predate coal." }
  ]
};

function Quiz() {
  const [category, setCategory] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [verdict, setVerdict] = useState(null);

  const handleAnswer = (choice) => {
    const correct = choice === QUIZ_DATA[category][currentIdx].a;
    setVerdict(correct ? "Correct!" : "Wrong!");
    if (correct) setScore(prev => prev + 1);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentIdx < QUIZ_DATA[category].length - 1) {
      setCurrentIdx(prev => prev + 1);
      setShowResult(false);
      setVerdict(null);
    } else {
      setCategory(null);
      setCurrentIdx(0);
      setShowResult(false);
      setVerdict(null);
      alert(`Final Score: ${score}/${QUIZ_DATA[category].length}`);
      setScore(0);
    }
  };

  if (!category) {
    const categories = [
      { id: "Food", icon: "🍕" },
      { id: "Medicine", icon: "🧪" },
      { id: "Science", icon: "🧬" }
    ];

    return (
      <div className="game-container">
        <div className="game-card">
          <h2>Choose Your Topic</h2>
          <p className="sub-text">Pick a category to begin</p>

          <div className="category-grid-new">
            {categories.map(cat => (
              <button
                key={cat.id}
                className="category-box"
                onClick={() => setCategory(cat.id)}
              >
                <span className="icon">{cat.icon}</span>
                <span>{cat.id}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const question = QUIZ_DATA[category][currentIdx];

  return (
    <div className="game-container">
      <div className="game-card">
        <div className="game-header">
          <span>{category} Quiz</span>
          <span>Score: {score}</span>
        </div>

        <h3 className="question-text">“{question.q}”</h3>

        {!showResult ? (
          <div className="quiz-buttons">
            <button onClick={() => handleAnswer("fact")}>Fact</button>
            <button onClick={() => handleAnswer("myth")}>Myth</button>
          </div>
        ) : (
          <div className="game-over">
            <h4>{verdict}</h4>
            <p>{question.info}</p>
            <button onClick={nextQuestion}>
              {currentIdx < QUIZ_DATA[category].length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
