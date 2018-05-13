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
      <div className='widget__search'>
        <input
          className='widget__search--input'
          type='text'
          placeholder='Search...'
          onFocus={(e) => {e.target.placeholder=''}}
          onBlur={(e) => {e.target.placeholder='Search...'}}
          value={this.props.searchText}
          onChange={this.handleOnChange}
          >
          </input>
      </div>
    );
  };
}

export default SearchBar;
