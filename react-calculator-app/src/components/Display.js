import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props);
  }
  handleValueChange = (e) => {
    const displayValue = e.target.value;
    if (!displayValue || displayValue.match(/^\d{1,}(\.\d{0,})?$/)){
      this.props.handleValueChange(displayValue);
    }
  };
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.displayValue}
          onChange={this.handleValueChange}
        />
      </div>
    )
  }
}

export default Display;
