import Vue from 'vue'
import App from './App.vue'
import moment from 'moment';

Vue.config.productionTip = false

const TODO = 1;
const EVENT = 2;

let store = {
  debug: true,

  state: {
    items: [
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
    ]
  },

  createItemAction(item) {
    if (this.debug) console.log('createItemAction triggered with', item)
    this.state.items.push(item);
  },
}

new Vue({
  el: '#app',
  template: '<App :store=store />',
  components: { App },
  data: {
    store: store
  }
});
