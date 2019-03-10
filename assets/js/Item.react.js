import React, { Component } from 'react';
import TodoItem from './TodoItem';
import EventItem from './EventItem';
import { TODO, EVENT } from './Store';

class Item extends Component {
  render() {
    switch(this.props.item.blockType) {
      case TODO:
        return <TodoItem item={this.props.item} />
      case EVENT:
        return <EventItem item={this.props.item} />
      default:
        throw 'Block type unknown'
    }
  }
}

export default Item;
