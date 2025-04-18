import React, { useState, useEffect } from 'react';
import { FaHandRock, FaHandScissors, FaHandPaper } from 'react-icons/fa';
import './App.css';

function App() {

  // STATE VARIABLES
  const [userChoice, setUserChoice] = useState(null); // user's choice
  const [comChoice, setComChoice] = useState(null); // com's choice
  const [result, setResult] = useState(""); // game result
  const [userScore, setUserScore] = useState(0); // com's score
  const [comScore, setComScore] = useState(0); // user's score

  const choices = ["rock", "paper", "scissors"];

  const outcome = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  // && requires both values to be truthy. || needs at least one value to be truthy
  useEffect(() => {
    if (userChoice && comChoice) {
      if (userChoice === comChoice) { // USER === COM is Tie
        setResult("It's a tie!");
      } else if (outcome[userChoice] === comChoice) { // USER > COM is USER WINS
        setResult("You win!");
        setUserScore(prev => prev + 1); // ADDS TO USER'S SCORE COUNTER
      } else {
        setResult("Computer wins!"); // USER < COM is COM WINS
        setComScore(prev => prev + 1); // ADDS TO COM'S SCORE COUNTER
      }
    }
    // eslint-disable-next-line
  }, [userChoice, comChoice]); // Dependencies susceptible to change

  const handleClick = (choice) => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComChoice(random);
  };

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <div className="scoreboard">
        <p>USER: {userScore}</p>
        <p>COM: {comScore}</p>
      </div>
      <div className="choices">
        <button className="rock" onClick={() => handleClick("rock")}><FaHandRock /></button>
        <button className="paper" onClick={() => handleClick("paper")}><FaHandPaper /></button>
        <button className="scissors" onClick={() => handleClick("scissors")}><FaHandScissors /></button>
      </div>
      <div className="result">
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
