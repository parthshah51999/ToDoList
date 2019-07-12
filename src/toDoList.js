import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import SearchBar from './SearchBar';
import './css/style'

class ToDoList extends React.Component {
  constructor() {
      super(); // it calls react Component constructor.
      this.state = { // state is a plain js object..init only in constructor
        items: [],
        value: '',
        isUpdate: false,
        id: Math.random(),
        searchValue: '',
        searchResults: [],
      };
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.editItem = this.editItem.bind(this);
      this.onChangeInputFunction = this.onChangeInputFunction.bind(this);
      this.onChangeSearchFunction = this.onChangeSearchFunction.bind(this);
  }

  editItem(id) {
    this.setState({
      isUpdate: true,
      id
    });
  }

  addItem() {
    let { items, searchResults } = this.state; // object destructring
    let isCheck = false;
    if (inputText === '') {
      return alert('Please enter the to do task.')
    }
    const { value, isUpdate, id } = this.state;
    if (isUpdate) {
      items = items.map((searchValue, i) => {
        if (searchValue === searchResults[id] && !isCheck) {
          isCheck = true;
          return value;
        }
        return searchValue;
      });
      searchResults[id] = value;
    } else {
      items = [...items, value];
      searchResults = [...items];
    }
    // this.state.value = '';  dont change state variables directly... use setState instead
    this.setState({
      searchResults,
      items,
      value: '',
      isUpdate: false,
      id: 9999
    });
  }

  removeItem(id) {
    let isCheck = false;
    let newItems = this.state.items.filter((item, i) => {
      if(item === this.state.searchResults[id] && !isCheck) {
        isCheck = true;
      } else {
        return item;
      }
    });
    let searchItems = this.state.searchResults.filter((item, i) => i !== id);
    this.setState({
      items: newItems,
      searchResults: searchItems,
    });
  }

  doRenderAddOrUpdateButton() {
    let buttonText = 'Add';
    if (this.state.isUpdate) { buttonText = 'Edit'; }
    return (
        <button
          onClick={this.addItem}
          type="button"
          className={this.state.isUpdate ? "btn btn-danger" : "btn btn-primary"}>{buttonText}
        </button>
    );
  }

  onChangeInputFunction() {
    return e => this.setState({ value: e.target.value });
  }

  onChangeSearchFunction() {
      return e => {
        let searchResults = this.state.items.filter((value, i) => value.indexOf(e.target.value) > -1);
        this.setState(
          {
            searchValue: e.target.value,
            searchResults: searchResults
        }
      )
    };
  }

  render() { // render is a react component method.
    return (
      <div className="toDoWrapper">
        <h1 className="display-4">To Do Application</h1>
        <div className="taskWrapper clearfix">
          <div className="addTask clearfix">
            <input
              className="input"
              type="text"
              placeholder="Enter Task"
              onChange={this.onChangeInputFunction()}
              value={this.state.value}
            />
            {this.doRenderAddOrUpdateButton()}
          </div>
          <SearchBar
            taskItems={this.state.items}
            searchValue={this.state.searchValue}
            onChangeSearchFunction={this.onChangeSearchFunction}
          />
        </div>
        <ToDoItem
          searchResults={this.state.searchResults}
          removeItem={this.removeItem}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

ToDoItem.propTypes = {
  searchResults: PropTypes.array,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  searchResults: [],
  removeItem: {},
  editItem: {},
};

SearchBar.propTypes = {
  taskItems: PropTypes.array,
  searchValue: PropTypes.string,
  onChangeSearchFunction: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  taskItems: [],
  searchValue: '',
  onChangeSearchFunction: {},
};

export default ToDoList;
