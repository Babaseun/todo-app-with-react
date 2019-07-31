import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Todos from './components/pages/Todos';
import Footer from './components/layouts/Footer';
import SignUp from './components/forms/SignUp';
import SignIn from './components/forms/SignIn';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  styles = {
    backgroundColor: 'yellow',
    height: '100vh'
  };

  render() {
    return (
      <Router>
        <div style={this.styles}>
          <Header />
          <Route
            exact
            path="/login"
            render={() => {
              return <SignIn />;
            }}
          />
          <Route
            exact
            path="/register"
            render={() => {
              return <SignUp />;
            }}
          />

          <Route
            exact
            path="/todos"
            render={() => {
              return (
                <div className="container">
                  <Todos />
                  <Footer />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}
export default App;
