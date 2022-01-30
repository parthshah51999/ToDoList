import React from "react";
import cloneDeep from "lodash/cloneDeep";
import ToDoItem from "./ToDoItem";
import SearchBar from "./SearchBar";
import "./css/style";

class ToDoList extends React.Component {
  constructor() {
    super(); // it calls react Component constructor.
    this.state = {
      // state is a plain js object..init only in constructor
      items: [],
      value: "",
      searchValue: "",
      textMap: {},
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.onChangeInputFunction = this.onChangeInputFunction.bind(this);
    this.onChangeSearchFunction = this.onChangeSearchFunction.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
  }

  editItem(id, action) {
    const { items, textMap } = this.state;
    const clonedItems = cloneDeep(items);
    const item = clonedItems.find((item) => item.id === id);
    if (!item) {
      return;
    }

    switch (action) {
      case "Done":
        item.toUpdate = false;
        item.text = textMap[item.id];
        break;
      case "Edit":
      default:
        item.toUpdate = true;
        this.onEditChange(item.id, { target: { value: item.text } });
        break;
    }

    this.setState({ items: clonedItems });
  }

  addItem() {
    const { items } = this.state; // object destructring
    let clonedItems = cloneDeep(items);
    const { value } = this.state;
    if (value === "") {
      return alert("Please enter the to do task.");
    }

    let newId = 1;
    if (clonedItems.length > 0) {
      newId = clonedItems[clonedItems.length - 1].id + 1;
    }
    clonedItems = [...clonedItems, { text: value, toUpdate: false, id: newId }];

    // this.state.value = '';  dont change state variables directly... use setState instead
    this.setState({
      items: clonedItems,
      value: "",
    });
  }

  removeItem(id) {
    const { items } = this.state;
    let newItems = items.filter((item) => item.id !== id);

    this.setState({
      items: newItems,
    });
  }

  getTaskInputDom() {
    const { value } = this.state;

    return (
      <div className="todo-input">
        <input
          className="input"
          type="text"
          placeholder="Enter Task"
          onChange={this.onChangeInputFunction()}
          value={value}
        />
        <button
          onClick={this.addItem}
          type="button"
          className="btn btn-primary"
        >
          Add Task
        </button>
      </div>
    );
  }

  onChangeInputFunction() {
    return (e) => this.setState({ value: e.target.value });
  }

  onChangeSearchFunction() {
    return (e) => {
      this.setState({
        searchValue: e.target.value,
      });
    };
  }

  getSearchedItems() {
    const { items, searchValue } = this.state;
    return items.filter((item) =>
      item.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  onEditChange(id, e) {
    const { textMap } = this.state;
    const clonedTextMap = cloneDeep(textMap);
    clonedTextMap[id] = e.target.value;
    this.setState({ textMap: clonedTextMap });
  }

  render() {
    const { items, searchValue, textMap } = this.state;

    // render is a react component method.
    return (
      <div className="wrapper">
        <div className="todo-wrapper">
          <h3 className="todo-header">To Do Application [Legacy code]</h3>
          <div className="todo-body">
            {this.getTaskInputDom()}
            <div className="todo-grid">
              <SearchBar
                searchValue={searchValue}
                onChangeSearchFunction={this.onChangeSearchFunction}
              />
              <ToDoItem
                searchResults={this.getSearchedItems()}
                removeItem={this.removeItem}
                editItem={this.editItem}
                onEditChange={this.onEditChange}
                textMap={textMap}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
