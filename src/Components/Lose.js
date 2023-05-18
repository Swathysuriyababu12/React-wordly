import React from "react";

import { useNavigate } from "react-router-dom";

function Lose() {
  const navigate = useNavigate();

  var onPlayAgain = () => {
    navigate("/game");
  };
  return (
    <button className="play-again-button" onClick={onPlayAgain}>
      Play Again
    </button>
  );
}

export default Lose;
