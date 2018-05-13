import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  };
  handleOnChange = (e) => {
    const text = e.target.value;
    this.props.handleOnChange(text);
  };
  render(){
    return (
      <div>
        <input
          type='text'
          placeholder='Search...'
          value={this.props.searchText}
          onChange={this.handleOnChange}
          >
          </input>
      </div>
    );
  };
}

export default SearchBar;
