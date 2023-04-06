import { React, useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  // const [operator, setOperator] = useState("");
  // const [firstNumber, setFirstNumber] = useState("");
  // const [secondNumber, setSecondNumber] = useState("");
  // const [result, setResult] = useState("");
  // const [isOperatorClicked, setIsOperatorClicked] = useState(false);
  // const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  // const [isDecimalClicked, setIsDecimalClicked] = useState(false);
  // const [isNegativeClicked, setIsNegativeClicked] = useState(false);
  

  function handleKeyPress(event) {
    setDisplay(event.target.value);
  }

  return (
    <div className="App">
      <div className="Calc-App">
        <h1>Scientific Calculator</h1>
        <div className="Calc-App-Display">
          <h1 className="display-text">{display}</h1>
        </div>
        <div className="Calc-App-Keypads">
          <button
            className="keypad"
            type="button"
            onClick={(event) => setDisplay(0)}
          >
            C
          </button>
          <button className="keypad" type="button">
            +/-
          </button>
          <button className="keypad" type="button">
            %
          </button>
          <button className="keypad" id="operator" type="button">
            ÷
          </button>
          <button
            value={7}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            7
          </button>
          <button
            value={8}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            8
          </button>
          <button
            value={9}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            9
          </button>
          <button className="keypad" id="operator" type="button">
            x
          </button>
          <button
            value={4}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            4
          </button>
          <button
            value={5}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            5
          </button>
          <button
            value={6}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            6
          </button>
          <button
            className="keypad"
            id="operator"
            type="button"
            onClick={handleKeyPress}
          >
            -
          </button>
          <button
            value={1}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            1
          </button>
          <button
            value={2}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            2
          </button>
          <button
            value={3}
            className="keypad"
            type="button"
            onClick={handleKeyPress}
          >
            3
          </button>
          <button
            className="keypad"
            id="operator"
            type="button"
            onClick={handleKeyPress}
          >
            +
          </button>
          <button
            value={0}
            className="keypad-big"
            type="button"
            onClick={handleKeyPress}
          >
            0
          </button>
          <button
            className="keypad"
            type="button"
            onClick={(event) => setDisplay(event.target.value)}
          >
            .
          </button>
          <button className="keypad" id="operator" type="button">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
