import React from "react";
import PropTypes from "prop-types";

export default class SearchBar extends React.Component {
  onChangeSearchFunction() {
    const { onChangeSearchFunction } = this.props;
    return onChangeSearchFunction();
  }

  render() {
    const { searchValue } = this.props;

    return (
      <div className="todo-search-wrapper">
        <input
          type="text"
          placeholder="Search Tasks..."
          onChange={this.onChangeSearchFunction()}
          value={searchValue}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  onChangeSearchFunction: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchValue: "",
  onChangeSearchFunction: () => {},
};
