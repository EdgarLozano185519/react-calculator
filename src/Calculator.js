import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStr: '0',
      result: 0
    };
  }
  handleClear = () => {
    this.setState({ inputStr: '0'});
  }
  handleClick = (e) => {
    if(this.state.inputStr === '0') this.setState({ inputStr: e.target.value });
    else this.setState({ inputStr: this.state.inputStr + e.target.value});
  }
  handleZero = () => {
    if(this.state.inputStr !== '0') this.setState({ inputStr: this.state.inputStr + '0' });
  }
  render() {
    return (
      <div>
        <h2>Calculator</h2>
        <p>Buttons are grouped as numbers or operators. You can navigate to a button with the keyboard and press Enter to activate. The equals button will give you the result of your current calculation.</p>
        <h3>Numbers</h3>
        <div id="numbers">
          <button value="1" onClick={this.handleClick} id="one">1</button>
          <button value="2" onClick={this.handleClick} id="two">2</button>
          <button value="3" onClick={this.handleClick} id="three">3</button>
          <button value="4" onClick={this.handleClick} id="four">4</button>
          <button value="5" onClick={this.handleClick} id="five">5</button>
          <button value="6" onClick={this.handleClick} id="six">6</button>
          <button value="7" onClick={this.handleClick} id="seven">7</button>
          <button value="8" onClick={this.handleClick} id="eight">8</button>
          <button value="9" onClick={this.handleClick} id="nine">9</button>
          <button onClick={this.handleZero} id="zero">0</button>
        </div>
        <h3>Operators</h3>
        <div id="operators">
          <button value="+" onClick={this.handleClick} id="add">plus (+)</button>
          <button value="-" onClick={this.handleClick} id="subtract">minus (-)</button>
          <button value="*" onClick={this.handleClick} id="multiply">times (*)</button>
          <button value="/" onClick={this.handleClick} id="divide">divided by (/)</button>
          <button id="decimal">Decimal point (.)</button>
          <button id="equals">equals (=)</button>
          <button onClick={this.handleClear} id="clear">Clear!</button>
        </div>
        <h3>Current Display</h3>
        <div id="display">Display: {this.state.inputStr}</div>
      </div>
    );
  }
}

export default Calculator;