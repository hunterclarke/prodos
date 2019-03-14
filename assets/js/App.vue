<template>
  <div>
    <Day
      v-bind:store=store
      v-for="(date, index) in datesToRender"
      v-bind:date="date"
      v-bind:key="index" />
  </div>
</template>

<script>
import Day from './Day.vue'
import moment from 'moment';

export default {
  props: ['store'],

  components: {
    Day,
  },

  data: function() {
    let datesToRender = [];
    for (let i = 13; i >= 0; i--) {
      datesToRender.push(moment().subtract(i, 'days'));
    }

    return {
      datesToRender,
    }
  }
}
</script>

<style>
</style>
