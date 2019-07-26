import React, { Component } from 'react';

export default class TodoItem extends Component {
  styles = {
    display: 'flex',
    justifyContent: 'center',
    height: '100px',
    border: '1px dotted red',
    alignItems: 'center'
  };

  render() {
    const { title, id } = this.props.todos;
    return (
      <form style={this.styles}>
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
        <button className="btn btn-danger ml-5" onClick={this.deleteTo}>
          Delete
        </button>
      </form>
    );
  }

  labelStyle = () => {
    const { completed } = this.props.todos;
    return {
      textDecoration: completed ? 'line-through' : 'none'
    };
  };
}
