import React from 'react';

class ToDoList extends React.Component {
  constructor() {
      super();
      this.state = {
        items: [],
        value: ''
      };
      this.addItem = this.addItem.bind(this);
  }

  addItem() {
    let inputText = this.state.value;
    console.log(inputText);
    this.state.items = [...this.state.items, {text: inputText, taskState: this.state.taskState}];
    this.state.value = '';
  }

  render() {
    let items = this.state.items;
    return (
      <div>
        <div id="addTask">
          <input className="input" size="40" type="text" placeholder="Enter Task" onChange={e => this.setState({ value: e.target.value })} value={this.state.value}/>
          <button onClick={this.addItem} type="button" className="btn btn-primary">Add</button>
        </div>
        <div id="TaskList">
        </div>
      </div>
    );
  }
}

export default ToDoList;
