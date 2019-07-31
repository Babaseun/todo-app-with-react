import React, { Component } from 'react';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  styles = {
    width: '500px',
    margin: '100px auto',
    backgroundColor: 'white',
    padding: '30px'
  };
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
    // const errorMsg = 'bg-danger w-100 text-white error';
    // var style = {
    //   display: 'none'
    // };

    return (
      <div>
        <form onSubmit={this.onSubmitUser} style={this.styles}>
          <h1 className="header  text-center">Login</h1>
          {/* <h4 style={style} className={errorMsg}>
            This email already exist
          </h4> */}

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
        </form>
      </div>
    );
  }
  addUser = (email, password) => {
    const url = `http://localhost:3000/users?email=${email}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.length !== 0 ? nextStepTodo(data) : console.log('hii');
      });
    const nextStepTodo = data => {
      const [{ id }] = data;
     localStorage.setItem('key',id)
     window.location ="/todos"
    };
  };
}

export default SignIn;
