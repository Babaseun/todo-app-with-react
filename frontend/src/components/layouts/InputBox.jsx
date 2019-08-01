import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class InputBox extends Component {
  state = {
    title: ''
  };
  styles = {
    width: '400px',
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
    console.log(this.props);
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
InputBox.propTypes = {
  addTodos: PropTypes.func.isRequired
};
