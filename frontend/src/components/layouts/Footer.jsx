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
  render() {
    return (
      <div>
        <footer style={this.styles}>
          <div>
            <h1>Todos</h1>
          </div>
        </footer>
      </div>
    );
  }
}

