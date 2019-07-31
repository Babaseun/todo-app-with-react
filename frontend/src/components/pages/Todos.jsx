import React, { Component } from 'react';
// import uuid from 'uuid';
import TodoItem from './TodoItem';
import InputBox from '../layouts/InputBox';

class Todos extends Component {
  state = {
    todos: [],
    email: '',
    password: ''
  };
  componentDidMount() {
    const key = localStorage.getItem('key');
    fetch(`http://localhost:3000/todos?userId=${key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ todos: data });
      });
  }
  markDown = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  deleteTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };
  addTodos = title => {
    fetch(` http://localhost:3000/todos?userId=${1}`, {
      method: 'POST',
      body: JSON.stringify({ title, completed: false }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <InputBox addTodos={this.addTodos} />
        {this.state.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todos={todo}
            markDown={this.markDown}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}
export default Todos;
