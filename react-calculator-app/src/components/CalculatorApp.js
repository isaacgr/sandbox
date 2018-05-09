import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';


class CalculatorApp extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default CalculatorApp;
