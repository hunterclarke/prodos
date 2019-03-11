<template>
  <div>
    <h3>{{date.format("MM-DD-YYYY")}}</h3>
    <ul>
      <li v-for="item in store.state.items">
        {{ item.data.title }}
      </li>
    </ul>
    <ItemForm v-if="isShowingForm" v-on:save="toggleIsShowingForm" v-on:cancel="toggleIsShowingForm" :store="store" />
    <button v-else v-on:click="toggleIsShowingForm">Add</button>
  </div>
</template>

<script>
import moment from 'moment';
import ItemForm from './ItemForm.vue';

export default {
  props: ['store'],

  components: {
    ItemForm,
  },

  data: function () {
    return {
      isShowingForm: false,
      date: moment(),
    }
  },

  methods: {
    toggleIsShowingForm: function() {
      this.isShowingForm = !this.isShowingForm;
    }
  }
}
</script>
