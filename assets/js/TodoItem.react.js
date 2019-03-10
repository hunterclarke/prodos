import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return <li>Todo: {this.props.item.data.title}</li>
  }
}

export default TodoItem;
