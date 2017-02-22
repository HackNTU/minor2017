<template>
  <section>

    <v-card>
      <v-card-row class="blue-grey darken-1">
        <v-card-title>
          <span class="white--text">活動辦法</span>
        </v-card-title>
      </v-card-row>
      <v-list two-line>
        <template v-for="rule in rules">
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="grey--text text--darken-2">info</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="rule.get('Item')"/>
                <v-list-tile-sub-title v-text="rule.get('Descr')"/>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </template>
      </v-list>
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
