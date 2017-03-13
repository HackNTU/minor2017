<template>
  <section>

    <br><h4>常見問題</h4><br>

    <v-expansion-panel>
      <v-expansion-panel-content v-for="qa in qas" :key="qa.id" class="py-2">
        <div slot="header" class="mr-5">{{qa.get('Question')}}</div>
        <v-card class="my-1">
          <v-card-text class="grey lighten-3">{{qa.get('Answer')}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

  </section>
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
section {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
</style>
