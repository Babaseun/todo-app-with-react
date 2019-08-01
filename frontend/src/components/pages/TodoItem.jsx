import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  styles = {
    display: 'flex',
    margin: '20px',
    justifyContent: 'center',
    height: '100px',
    // border: '1px solid red',
    alignItems: 'center',
    backgroundColor: 'white'
  };

  render() {
    const { title, id } = this.props.todos;
    return (
      <div style={this.styles} className="form">
        <div className="form-check ">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => this.props.markDown(id)}
          />

          <label style={this.labelStyle()} className="form-check-label">
            {title}
          </label>
        </div>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  labelStyle = () => {
    const { completed } = this.props.todos;
    return {
      textDecoration: completed ? 'line-through' : 'none',

      width: '101px'
    };
  };
}
TodoItem.propTypes = {
  markDown: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
export default TodoItem;
