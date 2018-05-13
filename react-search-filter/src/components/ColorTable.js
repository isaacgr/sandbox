import React from 'react';
import Color from './Color';

class ColorTable extends React.Component {
  constructor(props) {
    super(props)
  };
  render(){
    const rows = [];
    this.props.colors.forEach((color) => {
      rows.push(
        <Color
          color={color}
          key={color.color}
          />
      );
    });
    const filteredRows = rows.filter((row) => {
      const match = this.props.filter.match(/^[a-z]{1,}$/);
      if (match) {
        return row.key.includes(match[0]);
      }
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Hex Value</th>
          </tr>
        </thead>
        <tbody>{ (filteredRows.length == 0) ? rows : filteredRows}</tbody>
      </table>
    );
  };
}

export default ColorTable;
