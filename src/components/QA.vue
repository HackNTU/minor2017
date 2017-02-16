<template>
  <div>

    <h3>常見問題</h3>
    <h4>副標題</h4>

    <v-expansion-panel expand>
      <v-expansion-panel-content v-for="qa in qas">
        <div slot="header">{{qa.get('Question')}}</div>
        <v-card>
          <v-card-text class="grey lighten-3">{{qa.get('Answer')}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

  </div>
</template>

<script>
import { qas } from '../service/airtable.js'
export default {
  name: 'qa',
  data: function() {
    return{
      qas: qas,
    }
  }
}
</script>
<style scoped>
</style>
