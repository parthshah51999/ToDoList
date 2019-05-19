import React from 'react';

class ToDoList extends React.Component {
  constructor() {
      super(); //it calls react Component constructor.
      this.state = { //state is a plain js object..init only in constructor
        items: [],
        value: '',
        isUpdate: false,
        id: 9999
      };
      this.addItem = this.addItem.bind(this);
      this.displayList = this.displayList.bind(this);
      this.removeItem = this.removeItem.bind(this);
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
    {this.state.isUpdate ? newItems[this.state.id] = inputText : newItems = [...this.state.items, inputText]};
    //this.state.value = '';  dont change state variables directly... use setState instead
    this.setState({
      value : '',
      items : newItems,
      isUpdate : false,
      id : 9999
    });
  }

  removeItem(id) {
    let newItems = this.state.items.filter((item, i) => i !== id);
    this.setState({
      items : newItems
    });
  }

  displayList() {
    return (<ul>{this.state.items.map((item, i) => {
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

  render() { //render is a react component method.
    return (
      <div>
        <div id="addTask">
          <input
            className="input"
            size="40"
            type="text"
            placeholder="Enter Task"
            onChange={e => this.setState({value: e.target.value})}
            value={this.state.value}
          />
          {this.doRenderAddOrUpdateButton()}
        </div>
        <div id="taskList">
          {this.displayList()}
        </div>
      </div>
    );
  }
}

export default ToDoList;
