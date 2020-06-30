import React, { useState } from "react";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");

  const handleInput = (e) => {
    if (e === "AC") {
      setInput("0");
    } else if (e === "0") {
      if (input !== "0") {
        const equation = input.concat(e);
        setInput(equation);
      }
    } else {
      if (input === "0") {
        setInput(e);
      } else {
        const equation = input.concat(e);
        setInput(equation);
      }
    }
  };

  return (
    <div className="calculator">
      <Display displayInput={input} />
      <Buttons handleInput={handleInput} />
    </div>
  );
};

export default App;
