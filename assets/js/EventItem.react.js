import React, { Component } from 'react';

class EventItem extends Component {
  render() {
    return <li>Event: {this.props.item.data.title}</li>
  }
}

export default EventItem;
