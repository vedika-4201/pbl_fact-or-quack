import React, { useState, useEffect } from "react";

const QUESTIONS = [
  { q: "A goldfish's memory is only 3 seconds long.", a: "quack" },
  { q: "Humans share 50% of their DNA with bananas.", a: "fact" },
  { q: "Sharks can blink with both eyes.", a: "fact" },
  { q: "A penny dropped from a skyscraper can kill someone.", a: "quack" },
  { q: "Bulldogs were bred to fight bulls.", a: "fact" },
  { q: "An octopus has three hearts.", a: "fact" },
  { q: "The Great Wall is visible from the Moon.", a: "quack" },
  { q: "A strawberry is not actually a berry.", a: "fact" },
  { q: "Lightning never strikes twice.", a: "quack" },
  { q: "Wombat poop is cube-shaped.", a: "fact" }
];

function Challenge() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [time, setTime] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (time <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const handleAnswer = (choice) => {
    if (choice === QUESTIONS[currentIdx].a) {
      setScore(prev => prev + 1);
    }

    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setTime(10);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setTime(10);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <div className="game-card">

        <div className="game-header">
          <span>Question {currentIdx + 1} / 10</span>
          <span>Score: {score}</span>
        </div>

        <h2>🔥 Rapid Fire Round</h2>

        <div className="timer-circle">
          <div className="timer-number">{time}</div>
        </div>

        {!gameOver ? (
          <>
            <h3 className="question-text">
              {QUESTIONS[currentIdx].q}
            </h3>

            <div className="quiz-buttons">
              <button onClick={() => handleAnswer("fact")}>
                Fact
              </button>
              <button onClick={() => handleAnswer("quack")}>
                Quack
              </button>
            </div>
          </>
        ) : (
          <div className="game-over">
            <h3>Game Over 🦆</h3>
            <p>Your Score: {score} / 10</p>
            <button onClick={restartGame}>Play Again</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Challenge;

