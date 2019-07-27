import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Todos from './components/pages/Todos';
import Footer from './components/layouts/Footer';

class App extends Component {
  styles = {
    backgroundColor: 'yellow'
  };
  render() {
    return (
      <div style={this.styles}>
        <Header />

        <div className="container">
          <Todos />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
