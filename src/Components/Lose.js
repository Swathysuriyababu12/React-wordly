import React from "react";

import { useNavigate } from "react-router-dom";

function Lose() {
  const navigate = useNavigate();

  var onPlayAgain = () => {
    navigate("/game");
  };
  return (
    <>
      <h1 className="welcome-title">You lost the game:(</h1>
      <p className="welcome-text">Its okay,Click below to play again</p>
      <button className="play-again-button" onClick={onPlayAgain}>
        Play Again
      </button>
    </>
  );
}

export default Lose;
