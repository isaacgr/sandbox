import React from 'react';

const Color = (props) => {
  return (
    <tr style={{color: props.color.code.hex}}>
      <td>{props.color.color}</td>
      <td>{props.color.code.hex}</td>
    </tr>
  );
}

export default Color;
