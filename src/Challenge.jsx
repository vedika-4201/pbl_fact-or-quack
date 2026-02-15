import React, { useState, useEffect } from "react";

const QUESTIONS = [
  { q: "A goldfishes memory is only 3 seconds long.", a: "quack" },
  { q: "Humans share 50% of their DNA with bananas.", a: "fact" },
  { q: "Sharks are the only fish that can blink with both eyes.", a: "fact" },
  { q: "A penny dropped from the Empire State Building can kill someone.", a: "quack" },
  { q: "Bulldogs were originally bred to fight bulls.", a: "fact" },
  { q: "An octopus has three hearts.", a: "fact" },
  { q: "The Great Wall of China is visible from the Moon with the naked eye.", a: "quack" },
  { q: "A strawberry is not actually a berry.", a: "fact" },
  { q: "Lightning never strikes the same place twice.", a: "quack" },
  { q: "Wombat poop is cube-shaped.", a: "fact" }
];

function Challenge() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [time, setTime] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timer;
    if (time > 0 && !gameOver) {
      timer = setTimeout(() => setTime(prev => prev - 1), 1000);
    } else if (time === 0) {
      setGameOver(true);
    }
    return () => clearTimeout(timer);
  }, [time, gameOver]);

  const handleAnswer = (choice) => {
    if (choice === QUESTIONS[currentIdx].a) {
      // CORRECT ANSWER
      setScore(prev => prev + 1);
      if (currentIdx < QUESTIONS.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setTime(10); // Reset timer to 10s for the next question
      } else {
        alert("🏆 You've cleared the Rapid Fire! You're a genius!");
        setGameOver(true);
      }
    } else {
      // WRONG ANSWER
      setGameOver(true);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-card challenge-bg">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span style={{fontWeight: 'bold', color: '#5f27cd'}}>Question {currentIdx + 1}/10</span>
           <span style={{fontWeight: 'bold', color: '#ff4d4d'}}>Score: {score}</span>
        </div>
        
        <h2>🔥 Rapid Fire Round</h2>
        <div className="timer">{time}s</div>
        
        {!gameOver ? (
          <>
            <h3 style={{ minHeight: '80px', margin: '20px 0' }}>{QUESTIONS[currentIdx].q}</h3>
            <div className="quiz-buttons">
              <button onClick={() => handleAnswer("fact")}>Fact</button>
              <button onClick={() => handleAnswer("quack")}>Quack</button>
            </div>
          </>
        ) : (
          <div className="result-box">
            <h3 style={{fontSize: '24px'}}>Game Over! 🦆</h3>
            <p>Final Score: {score} / {QUESTIONS.length}</p>
            <button 
              className="quiz-buttons"
              style={{marginTop: '20px'}}
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Challenge;

