import React, { Component } from 'react';
import uuid from 'uuid';
import TodoItem from './TodoItem';
import InputBox from '../layouts/InputBox';

class Todos extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Wash Cloths',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to market',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Have lunch',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to Church',
        completed: false
      }
    ]
  };
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
    const newTodo = {
        id:uuid.v4(),
        title,
        completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]})
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
