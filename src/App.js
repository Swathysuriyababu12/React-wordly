import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./Components/Welcome";

import { useEffect, useState } from "react";
import Wordle from "./Components/Wordle";
import "./App.css";

import Win from "./Components/Win";
import Lose from "./Components/Lose";
import Leaderboard from "./Components/Leaderboard";

function App() {
  const [solution, setSolution] = useState(null);
  console.log(solution);

  useEffect(() => {
    fetch("https://62bb04cf7bdbe01d529589cd.mockapi.io/users")
      .then((res) => res.json())
      .then((json) => {
        // random int between 0 & 14
        const randomSolution =
          json[0].solutions[Math.floor(Math.random() * 10)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route
          path="/game"
          element={solution && <Wordle solution={solution} />}
        />
        <Route path="/win" element={<Win />} />
        <Route path="/lose" element={<Lose />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
