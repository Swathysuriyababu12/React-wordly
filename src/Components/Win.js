import React from "react";

import { useNavigate } from "react-router-dom";

function Win() {
  const navigate = useNavigate();

  var onPlayAgain = () => {
    navigate("/leaderboard");
  };
  return (
    <>
      <h1 className="welcome-title">Congratulations!!</h1>
      <p className="welcome-text">You won the game</p>
      <button className="play-again-button" onClick={onPlayAgain}>
        Go to leader board
      </button>
    </>
  );
}

export default Win;
