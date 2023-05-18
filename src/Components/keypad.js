import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);
  console.log(usedKeys);

  useEffect(() => {
    fetch("https://62bb04cf7bdbe01d529589cd.mockapi.io/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json[0].letters);
        setLetters(json[0].letters);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
