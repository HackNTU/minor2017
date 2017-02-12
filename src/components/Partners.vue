<template>
  <div>
    <h3>合作夥伴</h3>
    <h4>副標題</h4>

    <!-- TODO: simple version template, delete later if not needed -->
    <!-- <v-container>
      <div v-for="partner in partners">
        <p>Name: {{ partner.get('Name') }}</p>
        <img :src="partner.get('Photo')[0].url" height="75px">
        <p>Description: {{ partner.get('Description') }}</p>
      </div>
    </v-container> -->

    <!-- TODO: card version template, delete later if not needed -->
    <v-container>
      <div v-for="partner in partners">
        <div class="partner">
          <v-card horizontal>
            <v-card-row :img="partner.get('Photo')[0].url" height="120px"></v-card-row>
            <v-card-column>
              <v-card-row height="120px" class="blue white--text text-xs-left">
                <v-card-text>
                  <strong>{{ partner.get('Name') }}</strong>
                  <v-spacer></v-spacer>
                  <div>{{ partner.get('Description') }}</div>
                </v-card-text>
              </v-card-row>
              <v-card-row actions class="blue darken-2">
                <v-btn flat class="white--text">
                  <!-- TODO: Find more icons in https://material.io/icons/#ic_language -->
                  <v-icon left>language</v-icon>{{ partner.get('Link') }}
                </v-btn>
              </v-card-row>
            </v-card-column>
          </v-card>
        </div>
      </div>
    </v-container>

  </div>
</template>

<script>
import { partners } from '../service/airtable.js'
export default {
  name: 'partners',
  data: function(){
    return {
      partners: partners
    }
  }
}
</script>

<style scoped>
</style>
