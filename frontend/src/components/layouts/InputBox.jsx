import React, { Component } from 'react';

export default class InputBox extends Component {
  state = {
    title: ''
  };
  styles = {
    width: '500px',
    margin: '10px auto',
    backgroundColor: 'white',
    padding: '30px'
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodos(this.state.title);
  };
  render() {
    return (
      <div style={this.styles}>
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="Enter Todos..."
              value={this.state.title}
              id="input"
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success btn-block">Submit</button>
        </form>
      </div>
    );
  }
}
