import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate } from '../Logic/Calculate';

const operators = [
  'C', '+/-', '/',
  'x', '-', '+', '='
]

class CalculatorApp extends React.Component {
  state = {
    displayValue: ''
  }
  handleValueChange = (displayValue) => {
    this.setState((prevState) => ({
      displayValue
    }));
  }
  handleButtonClick = (buttonName) => {
    // TODO: Make this more elegant
    if (buttonName.match(/\d|\./)){
      if (this.state.displayValue.includes('.') && (buttonName === '.')){
        return
      }
      this.setState((prevState) => ({
        displayValue: prevState.displayValue + buttonName
       }));
    } else if (operators.includes(buttonName)) {
      this.setState(() => (calculate(this.state, buttonName)));
    }
  }
  render() {
    return (
      <div>
        <Display
          displayValue={this.state.displayValue}
          handleValueChange={this.handleValueChange}
        />
        <ButtonPanel
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default CalculatorApp;
