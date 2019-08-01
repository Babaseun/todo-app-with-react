import React, { Component } from 'react';

export default class Footer extends Component {
  styles = {
    height: '200px',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  logOut = () => {
    localStorage.clear();
    window.location = '/login';
  };
  render() {
    return (
      <div>
        <footer style={this.styles}>
          <div>
            <h1>Todos</h1>
          </div>
          <button className="btn btn-danger ml-3" onClick={this.logOut}>
            LOGOUT
          </button>
        </footer>
      </div>
    );
  }
}
