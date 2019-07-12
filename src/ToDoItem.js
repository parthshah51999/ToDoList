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
      this.props.searchResults.length > 0 ?
        <div className="Table">
          <div className="CellHeadings taskcol">Tasks</div>
          <div className="CellHeadings">Actions</div>
          {
            this.props.searchResults.map((item, i) => {
              return (
                <div key={i} className="Row">
                  <div className="Cell taskcol"><p>{item}</p></div>
                  <div className="Cell">
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
                  </div>
                </div>
              );
            })
          }
        </div>
      : <div></div>
    );
  }
}
