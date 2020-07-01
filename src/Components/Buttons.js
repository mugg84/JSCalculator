import React from "react";

const Buttons = ({ handleInput }) => {
  const handleClick = (e) => {
    handleInput(e.target.innerHTML);
  };

  return (
    <div className="buttons">
      <div id="clear" value="AC" onClick={handleClick}>
        AC
      </div>
      <div id="divide" value="/" onClick={handleClick}>
        /
      </div>
      <div id="multiply" onClick={handleClick}>
        X
      </div>
      <div id="seven" onClick={handleClick}>
        7
      </div>
      <div id="eight" onClick={handleClick}>
        8
      </div>
      <div id="nine" onClick={handleClick}>
        9
      </div>
      <div id="subtract" onClick={handleClick}>
        -
      </div>
      <div id="four" onClick={handleClick}>
        4
      </div>
      <div id="five" onClick={handleClick}>
        5
      </div>
      <div id="six" onClick={handleClick}>
        6
      </div>
      <div id="add" onClick={handleClick}>
        +
      </div>
      <div id="one" onClick={handleClick}>
        1
      </div>
      <div id="two" onClick={handleClick}>
        2
      </div>
      <div id="three" onClick={handleClick}>
        3
      </div>
      <div id="zero" onClick={handleClick}>
        0
      </div>
      <div id="decimal" onClick={handleClick}>
        .
      </div>
      <div id="equals" onClick={handleClick}>
        =
      </div>
    </div>
  );
};

export default Buttons;
