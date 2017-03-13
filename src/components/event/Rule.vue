<template>
  <section class="mt-5 mb-0">

    <v-card>
      <v-card-row class="green lighten-2">
        <v-card-title>
          <span class="black--text text-xs-center text-sm-left">活動辦法</span>
        </v-card-title>
      </v-card-row>

      <template class="hidden-sm-and-down">
        <v-card-row v-for="rule in rules" :key="rule.id">
          <v-card-text class="text-xs-left mx-4">
            <strong><div>{{rule.get('Item')}}</div></strong>
            <div v-for="line in rule.get('Descr').split('\n')">
              <p>{{line}}</p>
            </div>
          </v-card-text>
        </v-card-row>
      </template>

    </v-card>

  </section>
</template>

<script>
import {rules} from '../../service/airtable'
export default {
  name: 'rule',
  data: function(){
    return {
      rules: rules,
    }
  },
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
