import React from 'react';

class ToDoList extends React.Component {
  constructor() {
      super();
      this.state = {
        items: [],
        value: ''
      };
      this.addItem = this.addItem.bind(this);
      this.displayList = this.displayList.bind(this);
  }

  addItem() {
    let inputText = this.state.value;
    this.state.items = [...this.state.items, inputText];
    this.state.value = '';
    this.setState({
      value : '',
      items : this.state.items
    });
  }

  displayList(){
    return (this.state.items.slice(0).reverse().map((item,i) => <li key={i}>{item}</li>));
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
          <ul>
            {this.displayList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoList;
