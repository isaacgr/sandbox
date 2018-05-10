import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.handleButtonClick(props.name)
        }}
        >
      {props.name}
    </button>
    </div>
  )
}

export default Button;
