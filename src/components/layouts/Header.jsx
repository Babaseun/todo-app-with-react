import React, { Component } from 'react';

export class Header extends Component {
  style = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px'
  };
  render() {
    return (
      <div style={this.style} className="header">
        <h1 className="text-center">Todo's</h1>
      </div>
    );
  }
}

export default Header;
