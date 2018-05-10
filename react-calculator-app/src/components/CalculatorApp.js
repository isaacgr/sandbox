import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const operators = [
  'C', '+/-', '/',
  'x', '-', '+', '='
]

class CalculatorApp extends React.Component {
  state = {
    displayValue: ''
  }
  onDisplayValueChange = (displayValue) => {
    this.setState((prevState) => ({
      displayValue
    }));
    console.log(displayValue);
  }
  handleButtonClick = (buttonName) => {
    if (!isNaN(buttonName)){
      this.setState((prevState) => ({
        displayValue: prevState.displayValue + buttonName
       }));
    } else if (operators.includes(buttonName)) {
      console.log('will do something');
    }
  }
  render() {
    return (
      <div>
        <Display
          displayValue={this.state.displayValue}
          onDisplayValueChange={this.onDisplayValueChange}
        />
        <ButtonPanel
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default CalculatorApp;
