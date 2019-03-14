<template>
  <div>
    <h3>{{ date.format("MM-DD-YYYY") }}</h3>
    <ul>
      <li v-for="item in items">
        {{ item.data.title }}
      </li>
    </ul>
    <ItemForm
      v-if="isShowingForm"
      v-on:save="handleSave"
      v-on:cancel="toggleIsShowingForm"
      :date="date"
      :store="store" />
    <button v-else v-on:click="toggleIsShowingForm">Add</button>
  </div>
</template>

<script>
import moment from 'moment';
import ItemForm from './ItemForm.vue';

export default {
  props: ['store', 'date'],

  components: {
    ItemForm,
  },

  data: function () {
    return {
      isShowingForm: false,
      items: this.store.getItemsForDate(this.date),
    }
  },

  methods: {
    handleSave: function() {
      this.toggleIsShowingForm();
      this.items = this.store.getItemsForDate(this.date);
    },

    toggleIsShowingForm: function() {
      this.isShowingForm = !this.isShowingForm;
    }
  }
}
</script>
