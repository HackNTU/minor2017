<template>
  <div>
    <h3>counter</h3>
    <p>{{ count }}</p>
    <p>
      <!-- <button @click="increment">+</button> -->
      <!-- <button @click="decrement">-</button> -->
      <v-btn @click.native="increment" floating large success>
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn @click.native="decrement" floating large warning>
        <v-icon>warning</v-icon>
      </v-btn>
    </p>
  </div>
</template>
<script>
import Vuex from 'vuex'

export default {
  name: 'counter',
  data() {
    return {
      localCount: 0
    }
  },
  computed: {
    ...Vuex.mapState(['count']),
  },
  methods: {
    ...Vuex.mapMutations(['increment', 'decrement']),
  },

}
</script>
<style scoped>
</style>
