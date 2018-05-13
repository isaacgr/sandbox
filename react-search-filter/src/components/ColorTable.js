import React from 'react';
import Color from './Color';

class ColorTable extends React.Component {
  constructor(props) {
    super(props)
  };
  render(){
    const rows = [];
    const match = this.props.filter.match(/^[a-zA-Z]{0,}$/)
    this.props.colors.forEach((color) => {
      if (!match){
        return
      }
      
      if (!color.color.includes(match[0])) {
        return
      };
      rows.push(
        <Color
          color={color}
          key={color.color}
          />
      );
    });
    return (
      <table className='widget__table'>
        <thead>
          <tr>
            <th className='widget__table--header'>Color</th>
            <th className='widget__table--header'>Hex Value</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };
}

export default ColorTable;
