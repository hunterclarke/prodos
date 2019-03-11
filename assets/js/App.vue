<template>
  <Day :store=store />
</template>

<script>
import Day from './Day.vue'

export default {
  props: ['store'],

  components: {
    Day,
  }
}
</script>

<style>
</style>
