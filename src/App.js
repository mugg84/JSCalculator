import React, { useState } from "react";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState([0]);

  const handleInput = (e) => {
    /// clear
    if (e === "AC") {
      setInput("0");
      setExpression([0]);

      // +-/X
    } else if (e === "+" || e === "-" || e === "X" || e === "/") {
      // change to multiply input
      if (e === "X") {
        e = "*";
      }

      if (input === "0") {
        // if the input is -
        
      } else if (input === "-") {
        setInput(e);
      } else if (input === "+" || input === "/" || input === "*") {
        if (e === "-") {
          const negNum = input.concat("-");
          setInput(negNum);
        } else {
          setInput(e);
        }
        // if the input is a number
      } else if (!/\+|-|\*|\//.test(input)) {
        const addInput = expression.concat(Number(input));
        setInput(e);
        setExpression(addInput);
      }
    }
    // zero
    else if (e === "0") {
      // input with elements
      if (input !== "0") {
        const number = input.concat(e);
        setInput(number);
      }
      // input decimal
    } else if (e === ".") {
      if (input === "0") {
        setInput("0.");
        ///check if it has already a decimal
      } else if (!/\./.test(input)) {
        const number = input.concat(e);
        setInput(number);
      }

      // number
    } else {
      if (input === "0") {
        setInput(e);
        //if input is a sign
      } else if (/\+|-|\*|\//.test(input)) {
        //if it's a single sign
        if (input.length === 1) {
          const addSign = expression.concat(input);
          setInput(e);
          setExpression(addSign);
          // if it's sign and -
        } else {
          const addSign = expression.concat(input[0]);
          setInput("-" + e);
          setExpression(addSign);
        }
      } else {
        const number = input.concat(e);
        setInput(number);
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
