import React, { Component } from 'react';
import Item from './Item';
import ItemForm from './ItemForm';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingForm: false,
    };
  }

  toggleForm() {
    this.setState({
      isShowingForm: !this.state.isShowingForm
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.date.format("MM-DD-YYYY")}</h3>
        <ul>
          {this.props.store.itemsForDate(this.props.date).map(item => <Item item={item} />)}
        </ul>
        {this.state.isShowingForm ?
          <ItemForm toggleForm={this.toggleForm.bind(this)} store={this.props.store}/>:
          <button onClick={this.toggleForm.bind(this)}>Add</button>
        }
      </div>
    );
  }
}

export default Day;
