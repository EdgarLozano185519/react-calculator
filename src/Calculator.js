import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_str: '',
      result: 0
    };
  }
  render() {
    return (
      <div>
        <h2>Calculator</h2>
        <p>Buttons are grouped as numbers or operators. You can navigate to a button with the keyboard and press Enter to activate. The equals button will give you the result of your current calculation.</p>
        <h3>Numbers</h3>
        <div id="numbers">
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="zero">0</button>
        </div>
        <h3>Operators</h3>
        <div id="operators">
          <button id="add">plus (+)</button>
          <button id="subtract">minus (-)</button>
          <button id="multiply">times (*)</button>
          <button id="divide">divided by (/)</button>
          <button id="decimal">Decimal point (.)</button>
          <button id="equals">equals (=)</button>
          <button id="clear">Clear!</button>
        </div>
        <h3>Current Display</h3>
        <div id="display"></div>
      </div>
    );
  }
}

export default Calculator;