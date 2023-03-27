import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Calc-App">
        <div className="Calc-App-Display">
          <h1 className="display-text">100</h1>
        </div>
        <div className="Calc-App-Keypads">
          <button className="keypad" type="button">
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
          <button className="keypad" type="button">
            7
          </button>
          <button className="keypad" type="button">
            8
          </button>
          <button className="keypad" type="button">
            9
          </button>
          <button className="keypad" id="operator" type="button">
            x
          </button>
          <button className="keypad" type="button">
            4
          </button>
          <button className="keypad" type="button">
            5
          </button>
          <button className="keypad" type="button">
            6
          </button>
          <button className="keypad" id="operator" type="button">
            -
          </button>
          <button className="keypad" type="button">
            1
          </button>
          <button className="keypad" type="button">
            2
          </button>
          <button className="keypad" type="button">
            3
          </button>
          <button className="keypad" id="operator" type="button">
            +
          </button>
          <button className="keypad-big" type="button">
            0
          </button>
          <button className="keypad" type="button">
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
