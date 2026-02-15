import React, { useState } from "react";

const QUIZ_DATA = {
  Food: [
    { q: "Bananas grow on trees.", a: "myth", info: "They grow on giant herbs!" },
    { q: "White chocolate isn't actually chocolate.", a: "fact", info: "It contains no cocoa solids." },
    { q: "Carrots were originally purple.", a: "fact", info: "Orange ones were bred later in the Netherlands." }
  ],
  Medicine: [
    { q: "Antibiotics kill viruses.", a: "myth", info: "Antibiotics only work on bacteria." },
    { q: "You use only 10% of your brain.", a: "myth", info: "Scans show we use almost every part." },
    { q: "Cracking your knuckles causes arthritis.", a: "myth", info: "It's just gas bubbles popping." }
  ],
  Science: [
    { q: "Goldfish have a 3-second memory.", a: "myth", info: "They can remember things for months." },
    { q: "There is no gravity in space.", a: "myth", info: "Gravity is everywhere; astronauts just 'freefall'." },
    { q: "Diamond is made from highly compressed coal.", a: "myth", info: "Most diamonds are much older than coal!" }
  ]
};

function Quiz() {
  const [category, setCategory] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [verdict, setVerdict] = useState(null);

  const handleAnswer = (choice) => {
    const isCorrect = choice === QUIZ_DATA[category][currentIdx].a;
    setVerdict(isCorrect ? "Correct!" : "Wrong!");
    if (isCorrect) setScore(score + 1);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setVerdict(null);
    if (currentIdx < QUIZ_DATA[category].length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      alert(`Quiz Finished! Your score: ${score + (verdict === "Correct!" ? 1 : 0)}/${QUIZ_DATA[category].length}`);
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setCategory(null);
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
  };

  // 1. CATEGORY SELECTION SCREEN
  // ... (Keep the QUIZ_DATA and other functions the same as before)

  // 1. CATEGORY SELECTION SCREEN
  if (!category) {
    const categories = [
      { id: 'Food', icon: '🍕' },
      { id: 'Medicine', icon: '🧪' },
      { id: 'Science', icon: '🧬' }
    ];

    return (
      <div className="page-wrapper">
        <div className="page-card quiz-bg">
          <h2 style={{ marginBottom: '10px' }}>Choose Your Topic</h2>
          <p style={{ color: '#666' }}>Test your knowledge in a specific field</p>
          
          <div className="category-grid">
            {categories.map((cat) => (
              <button 
                key={cat.id} 
                className="category-btn" 
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

// ... (Keep the rest of the Quiz return logic the same)

  // 2. QUIZ SCREEN
  const currentQuestion = QUIZ_DATA[category][currentIdx];

  return (
    <div className="page-wrapper">
      <div className="page-card quiz-bg">
        <span style={{ fontWeight: 'bold', color: '#5f27cd' }}>{category} Quiz</span>
        <h3 style={{ margin: '30px 0' }}>“{currentQuestion.q}”</h3>

        {!showResult ? (
          <div className="quiz-buttons">
            <button onClick={() => handleAnswer("fact")}>Fact</button>
            <button onClick={() => handleAnswer("myth")}>Myth</button>
          </div>
        ) : (
          <div className="result-box">
            <h4 style={{ color: verdict === "Correct!" ? "#2ecc71" : "#eb4d4b" }}>{verdict}</h4>
            <p>{currentQuestion.info}</p>
            <button className="quiz-buttons" onClick={nextQuestion} style={{ marginTop: '15px' }}>
              {currentIdx < QUIZ_DATA[category].length - 1 ? "Next Question" : "Finish"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;

