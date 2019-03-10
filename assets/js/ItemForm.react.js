import React, { Component } from 'react';

class ItemForm extends Component {
  render() {
    return (
      <form>
        <select>
          <option value="1" selected>Todo</option>
          <option value="2">Event</option>
        </select>
        <input type="text"/>
        <button onClick={this.props.store.createItem.bind(this.props.store)}>Save</button>
        <button onClick={this.props.toggleForm}>Cancel</button>
      </form>
    );
  }
}

export default ItemForm;
