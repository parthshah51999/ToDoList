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
      this.props.searchResults.length > 0 ?
        <div className="Table">
          <div className="CellHeadings taskcol">Tasks</div>
          <div className="CellHeadings">Actions</div>
          {
            searchResults.map((item, i) => {
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
