import React, { useEffect, useState } from "react";
import useWordle from "./useWordle";

// components
import Grid from "./Grid";
import Keypad from "./keypad";
import Win from "./Win";

import { useNavigate } from "react-router-dom";

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  console.log(handleKeyup);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      window.removeEventListener("keyup", handleKeyup);
      setWrong(true);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {isCorrect ? navigate("/win") : null}
      {wrong ? navigate("/lose") : null}
    </div>
  );
}
