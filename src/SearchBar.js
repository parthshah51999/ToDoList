import React from 'react';

export default class SearchBar extends React.Component {
  onChangeSearchFunction() {
    return this.props.onChangeSearchFunction();
  }

  render() {
    return (
        this.props.taskItems.length > 0 ?
        <input
        className="searchText"
        type="text"
        placeholder="Search..."
        onChange={this.onChangeSearchFunction()}
        value={this.props.searchValue}
        /> :
        <div></div>
    );
  }
}
