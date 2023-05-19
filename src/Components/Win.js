import React from "react";

import { useNavigate } from "react-router-dom";

function Win() {
  const navigate = useNavigate();

  var onPlayAgain = () => {
    navigate("/leaderboard");
  };
  var onPlay = () => {
    navigate("/game");
  };
  return (
    <>
      <h1 className="welcome-title">Congratulations!!</h1>
      <p className="welcome-text">You found the word</p>
      <button className="play-again-button" onClick={onPlayAgain}>
        Go to leader board
      </button>
      <div className="lead">
        {" "}
        <button className="play-again-button" onClick={onPlay}>
          play again
        </button>
      </div>
    </>
  );
}

export default Win;
