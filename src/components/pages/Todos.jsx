import React, { Component } from 'react';
import uuid from 'uuid';
import TodoItem from './TodoItem';

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

  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <TodoItem key={todo.id} todos={todo} markDown={this.markDown} />
        ))}
      </div>
    );
  }
}
export default Todos;
