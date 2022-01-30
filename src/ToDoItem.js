import React from "react";
import PropTypes from "prop-types";

export default class ToDoItem extends React.Component {
  removeItem(id) {
    const { removeItem } = this.props;
    return removeItem(id);
  }

  editItem(id, action) {
    const { editItem } = this.props;
    return editItem(id, action);
  }

  render() {
    const { searchResults, onEditChange, textMap } = this.props;

    return (
      <div className="table-fixed-header">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-sm-1">
                #
              </th>
              <th scope="col">Tasks</th>
              <th scope="col" className="action-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>
                    {item.toUpdate ? (
                      <input
                        className="input"
                        type="text"
                        value={textMap[item.id]}
                        onChange={onEditChange.bind(this, item.id)}
                      />
                    ) : (
                      item.text
                    )}
                  </td>
                  <td>
                    <button
                      onClick={this.editItem.bind(
                        this,
                        item.id,
                        item.toUpdate ? "Done" : "Edit"
                      )}
                      type="button"
                      className="btn btn-primary"
                    >
                      {item.toUpdate ? "Done" : "Edit"}
                    </button>
                    <button
                      onClick={this.removeItem.bind(this, item.id)}
                      type="button"
                      className="btn btn-danger ml-2"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
            {searchResults.length === 0 ? (
              <tr>
                <th scope="row" />
                <td className="no-records">No Records Found</td>
                <td />
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  searchResults: PropTypes.array,
  textMap: PropTypes.object,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  searchResults: [],
  textMap: {},
  removeItem: () => {},
  editItem: () => {},
  onEditChange: () => {},
};
