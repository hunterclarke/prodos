<template>
  <form>
    <select v-model="type">
      <option value=1>Todo</option>
      <option value=2>Event</option>
    </select>
    <input type="text" v-model="title"/>
    <button v-on:click.prevent="save">Save</button>
    <button v-on:click.prevent="$emit('cancel')">Cancel</button>
  </form>
</template>

<script>
import moment from 'moment';

export default {
  props: ["store"],

  data: function() {
    return {
      title: "",
      type: 1,
    };
  },

  methods: {
    save: function() {
      this.store.createItemAction({
        id: 5,
        blockType: parseInt(this.type, 10),
        cursor: moment(),
        data: {
          title: this.title,
          content: "This is a description of this todo",
        }
      });
      this.$emit('save');
    }
  }
}
</script>
