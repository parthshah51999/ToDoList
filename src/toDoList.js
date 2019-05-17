import React from 'react';

class ToDoList extends React.Component {
  constructor() {
      super(); //it calls react Component constructor.
      this.state = { //state is a plain js object..init only in constructor
        items: [],
        value: ''
      };
      this.addItem = this.addItem.bind(this);
      this.displayList = this.displayList.bind(this);
  }

  addItem() {
    let inputText = this.state.value; //object destructring
    this.state.items = [...this.state.items, inputText];
    //this.state.value = '';  dont change state variables directly... use setState instead
    this.setState({
      value : '',
      items : this.state.items
    });
  }

  displayList() {
    return (<ul>{this.state.items.slice(0).reverse().map((item, i) => <li key={i}>{item}</li>)}</ul>);
  }

  render() { //render is a react component method.
    let items = this.state.items; // use object destructring
    return (
      <div>
        <div id="addTask">
          <input
            className="input"
            size="40"
            type="text"
            placeholder="Enter Task"
            onChange={e => this.setState({ value: e.target.value })}
            value={this.state.value}
          />
          <button
            onClick={this.addItem}
            type="button"
            className="btn btn-primary">Add
          </button>
        </div>
        <div id="TaskList">
          {this.displayList()}
        </div>
      </div>
    );
  }
}

export default ToDoList;
