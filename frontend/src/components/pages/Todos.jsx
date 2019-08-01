import React, { Component } from 'react';

// import uuid from 'uuid';
import TodoItem from './TodoItem';
import InputBox from '../layouts/InputBox';

class Todos extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    const key = localStorage.getItem('key');
    (async () => {
      const res = await fetch(`http://localhost:3000/todos?userId=${key}`);
      const data = await res.json();
      this.setState({ todos: [...data] });
    })();
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
    fetch(` http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json('Todo Deleted'))
      .then(data => console.log(data));

    window.location = '/todos';

    // this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    console.log(this.state.todos);
  };
  addTodos = title => {
    const key = localStorage.getItem('key');
    fetch(` http://localhost:3000/users/${key}/todos`, {
      method: 'POST',
      body: JSON.stringify({ title, completed: false }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: [...this.state.todos, data] });
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
