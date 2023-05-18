import React from "react";
import "./Welcomescreen.css";
import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const navigate = useNavigate();
  var onStartGame = () => {
    navigate("/game");
  };
  return (
    <div className="welcome-screen">
      <h1 className="welcome-title">Welcome to Wordle!</h1>
      <p className="welcome-text">
        Guess the hidden word by entering your guesses.
      </p>
      <button className="start-button" onClick={onStartGame}>
        Start Game
      </button>
    </div>
  );
}

export default WelcomeScreen;
