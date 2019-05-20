import React from 'react';

class ToDoList extends React.Component {
  constructor() {
      super(); //it calls react Component constructor.
      this.state = { //state is a plain js object..init only in constructor
        items: [],
        value: '',
        isUpdate: false,
        id: 9999,
        searchValue : '',
        searchResults: []
      };
      this.addItem = this.addItem.bind(this);
      this.displayList = this.displayList.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.onChangeFunctions = this.onChangeFunctions.bind(this);
      this.doRenderSearchBar =  this.doRenderSearchBar.bind(this);
  }

  editItem(id) {
    this.setState({
      isUpdate : true,
      id : id
    });
  }

  addItem() {
    let inputText = this.state.value; //object destructring
    let newItems = this.state.items;
    let searchItems = this.state.searchResults;
    let isCheck = false;

    if(this.state.isUpdate) {
      newItems = newItems.map((value, i) => {
        if(value === searchItems[this.state.id] && !isCheck) {
          isCheck = true;
          return inputText;
        }
        return value;
      });
      searchItems[this.state.id] = inputText;
    } else {
      newItems = [...this.state.items, inputText]
      searchItems = [...newItems]
    }
    //this.state.value = '';  dont change state variables directly... use setState instead
    this.setState({
      value : '',
      items : newItems,
      isUpdate : false,
      id : 9999,
      searchResults: searchItems
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
      items : newItems,
      searchResults: searchItems
    });
  }

  displayList() {
    return (<ul>{this.state.searchResults.map((item, i) => {
      return (
        <li key={i}>{item}
        <button
          onClick={this.removeItem.bind(this, i)}
          type="button"
          className="btn btn-primary">Remove
        </button>
        <button
          onClick={this.editItem.bind(this, i)}
          type="button"
          className="btn btn-primary">Edit
        </button>
      </li>);
    })}</ul>);
  }

  doRenderAddOrUpdateButton() {
    let buttonText = "Add";
    if(this.state.isUpdate){buttonText = "Edit";}
    return (
      <button
        onClick={this.addItem}
        type="button"
        className="btn btn-primary">{buttonText}
      </button>
    );
  }

  doRenderSearchBar() {
    return (
      <input
      className="input"
      size="40"
      type="text"
      placeholder="Search..."
      onChange={this.onChangeFunctions('search')}
      value={this.state.searchValue}
    />
    );
  }

  onChangeFunctions(action) {
    return (
      action === 'search' ?
      e => {
        let searchResults = null;
        searchResults = this.state.items.filter((value, i) => value.includes(e.target.value));
        return this.setState(
          {
            searchValue: e.target.value,
            searchResults: searchResults
        })
      } :
      e => this.setState({value: e.target.value})
    )
  }

  render() { //render is a react component method.
    return (
      <div>
        <div id="addTask">
          <input
            className="input"
            size="40"
            type="text"
            placeholder="Enter Task"
            onChange={this.onChangeFunctions()}
            value={this.state.value}
          />
          {this.doRenderAddOrUpdateButton()}
        </div>
        <br/>
        <div id="searchBar">
          {this.doRenderSearchBar()}
        </div>
        <div id="taskList">
          {this.displayList()}
        </div>
      </div>
    );
  }
}

export default ToDoList;
