import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Todos from './components/pages/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container" />
        <Todos />
      </div>
    );
  }
}
export default App;
