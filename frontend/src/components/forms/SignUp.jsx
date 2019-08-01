import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
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
    this.addUser(email, password);
    this.setState({ email: '', password: '' });
  };
  onChange = details => {
    this.setState({ [details.target.name]: details.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitUser} style={this.styles}>
          <h1 className="header  text-center">SignUp</h1>
          <div style={this.errorMsgStyle} className="errorMsgStyleDisplay">
            <h4 className="bg-danger w-100 text-white">
              This email already exist
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
          <Link to="/login">Already Registered Click Here</Link>
        </form>
      </div>
    );
  }
  addUser = (email, password) => {
    const url = `http://localhost:3000/users?email=${email}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          document.querySelector('.errorMsgStyleDisplay').style.display =
            'none';
          insertIntoDB(email, password);
        } else {
          document.querySelector('.errorMsgStyleDisplay').style.display = '';
        }
      });
    const insertIntoDB = (email, password) => {
      const url = `http://localhost:3000/users`;
      const options = {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'content-type': 'application/json'
        }
      };
      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          const { id } = data;
          localStorage.setItem('key', id);
          window.location = '/todos';
        });
    };
  };
}

export default SignUp;
