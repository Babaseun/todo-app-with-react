import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  styles = {
    width: '500px',
    margin: '80px  auto',
    backgroundColor: 'white',
    padding: '30px',
    height: '400px'
  };
  errorMsgStyle = { display: 'none' };

  onSubmitUser = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.getUser(email, password);
  };

  onChange = details => {
    this.setState({ [details.target.name]: details.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitUser} style={this.styles}>
          <h1 className="header  text-center">Login</h1>
          <div style={this.errorMsgStyle} className="errorMsgStyleDisplay">
            <h4 className="bg-danger w-100 text-white">
              User with this email is not registered
            </h4>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={this.onChange}
              className="form-control"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={this.onChange}
              className="form-control"
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <Link to="/">Not Yet Registered Click Here</Link>
        </form>
      </div>
    );
  }
  getUser = (email, password) => {
    const url = `http://localhost:3000/users?email=${email}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.length !== 0) {
          document.querySelector('.errorMsgStyleDisplay').style.display =
            'none';
          const [{ id }] = data;

          localStorage.setItem('key', id);

          window.location = '/todos';
        } else {
          document.querySelector('.errorMsgStyleDisplay').style.display = '';
        }
      });
  };
}

export default SignIn;
