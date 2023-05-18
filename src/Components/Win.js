import React from "react";

import { useNavigate } from "react-router-dom";

function Win() {
  const navigate = useNavigate();

  var onPlayAgain = () => {
    navigate("/leaderboard");
  };
  return (
    <button className="play-again-button" onClick={onPlayAgain}>
      Go to leader board
    </button>
  );
}

export default Win;
