import React from 'react';

export default class ToDoItem extends React.Component {
  removeItem(id) {
    return this.props.removeItem(id);
  }

  editItem(id) {
    return this.props.editItem(id);
  }

  render() {
    return (
      <div>
        <ul className="taskList">
          {
            this.props.searchResults.map((item, i) => {
              return (
                <li key={i} className="clearfix">
                <p>{item}</p>
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
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
