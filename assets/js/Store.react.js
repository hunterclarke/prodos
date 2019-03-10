import moment from 'moment';

export const TODO = 1;
export const EVENT = 2;

const INITIAL_DATA = [
  {
    id: 1,
    blockType: TODO,
    cursor: moment(),
    data: {
      title: "This is a complete todo",
      content: "This is a description of this todo",
    }
  },
  {
    id: 2,
    blockType: EVENT,
    cursor: moment(),
    data: {
      title: "This is a meeting",
      content: "This is a description of this meeting",
    }
  },
  {
    id: 3,
    blockType: TODO,
    cursor: moment(),
    data: {
      title: "This is complete todo",
      content: "This is a description of this todo",
    }
  },
  {
    id: 4,
    blockType: TODO,
    cursor: moment("3019-03-01"),
    data: {
      title: "You should not see this todo",
      content: "This is a description of this todo",
    }
  },
];

class Store {
  constructor(data = INITIAL_DATA) {
    this.data = data;
  }

  itemsForDate(date) {
    return this.data.filter(item => {
      return date.isSame(item.cursor, "day");
    });
  }

  createItem(e) {
    e.preventDefault();
    this.data.push({
      id: 5,
      blockType: TODO,
      cursor: moment(),
      data: {
        title: "New Todo!",
        content: "This is a description of this todo",
      }
    });
    console.log(this.data);
  }
}

export default Store;
