import React from 'react';
import SearchBar from './SearchBar';
import ColorTable from './ColorTable';

class FilterableColorTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
  }
  handleOnChange = (searchText) => {
    this.setState(() => ({
      searchText
    }));
  }
  render() {
    return (
      <div className='container'>
        <div className='widget'>
          <SearchBar
            searchText={this.state.searchText}
            handleOnChange={this.handleOnChange}
          />
          <ColorTable
            colors={this.props.colors}
            filter={this.state.searchText}
          />
        </div>
      </div>
    );
  };
}

export default FilterableColorTable;
