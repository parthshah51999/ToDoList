import React from 'react';

export default class ToDoItem extends React.Component {
  removeItem(id) {
    const { removeItem } = this.props;
    return removeItem(id);
  }

  editItem(id) {
    const { editItem } = this.props;
    return editItem(id);
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div>
        <ul id="taskList">
          {
            searchResults.map((item, i) => {
              return (
                <li key={item}>
                  {item}
                  <button
                    onClick={this.removeItem.bind(this, i)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                  <button
                    onClick={this.editItem.bind(this, i)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Edit
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
