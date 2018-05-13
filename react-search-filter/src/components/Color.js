import React from 'react';

const Color = (props) => {
  return (
    <tr>
      <td className='widget__table--data'>{props.color.color}</td>
      <td className='widget__table--data'>{props.color.code.hex}</td>
    </tr>
  );
}

export default Color;
