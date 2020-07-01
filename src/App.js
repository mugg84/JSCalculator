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
      // input =
    } else if (e === "=") {
      let equation, result;
      // check if the input is a number
      if (/[0-9]/.test(input)) {
        equation = [...expression, Number(input)];
      } else {
        equation = [...expression];
      }
      //remove first zero
      equation.shift();

      equation = equation.map((el, i) => {
        if (i === 0) {
          result = el;
          return;
        } else if (typeof el !== "number") {
          if (el === "+") {
            result += equation[i + 1];
          } else if (el === "-") {
            result -= equation[i + 1];
          } else if (el === "/") {
            result /= equation[i + 1];
          } else if (el === "X") {
            result *= equation[i + 1];
          }
        }
      });

      setExpression([0]);
      setInput(result);

      // +-/X
    } else if (e === "+" || e === "-" || e === "X" || e === "/") {
      // change to multiply input
      if (input === "0") {
        setInput(e);
        // if the input is -
      } else if (input === "-") {
        setInput(e);
        //replace sign or add - to it
      } else if (/\+|X|\//.test(input) && !/[0-9]/.test(input)) {
        if (e === "-") {
          const negNum = input.concat("-");
          setInput(negNum);
        } else {
          setInput(e);
        }
        // if singn with -
      } else if (/\+-|X-|\/-/.test(input)) {
        setInput(e);

        // if the input is a number
      } else if (!/\+|-|X|\//.test(input) || /^(-)[0-9]$/.test(input)) {
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
      if (input && input.length < 20) {
        if (input === "0") {
          setInput("0.");
          ///check if it has tw signs
        } else if (/X-|\+-|\/-/.test(input)) {
          const addSign = expression.concat(input[0]);
          setExpression(addSign);
          setInput("-0.");
          ///check one sign
        } else if (/\+|-|X|\//.test(input) && !/[0-9]/.test(input)) {
          if (input.length === 1) {
            const newDec = expression.concat(input);
            setInput("0.");
            setExpression(newDec);
          }
          ///check if it has already a decimal
        } else if (!/\./.test(input)) {
          const number = input.concat(e);
          setInput(number);
          // if it's sign and -
        }
      }
      // number
    } else {
      if (input === "0") {
        setInput(e);
        //if input is mins and expression 0
      } else if (input === "-" && expression === [0]) {
        const newnNum = "-".concat(e);
        setInput(newnNum);
        //if input is a sign
      } else if (/\+|-|X|\//.test(input) && !/[0-9]/.test(input)) {
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
        if (input && input.length < 20) {
          const number = input.concat(e);
          setInput(number);
        }
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
