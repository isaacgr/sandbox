import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props);
  }
  onDisplayValueChange = (e) => {
    const displayValue = e.target.value;
    if (!displayValue || displayValue.match(/^\d{1,}(\.\d{0,})?$/)){
      this.props.onDisplayValueChange(displayValue);
    }
  }
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.displayValue}
          onChange={this.onDisplayValueChange}
        />
      </div>
    )
  }
}

export default Display;
