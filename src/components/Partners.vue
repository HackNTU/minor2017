<template>
  <section>
    <h3>合作夥伴</h3>

    <!-- <v-container class="mw-1000 mt-5">
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
                  <v-icon left>language</v-icon>{{ partner.get('Link') }}
                </v-btn>
              </v-card-row>
            </v-card-column>
          </v-card>
        </div>
      </div>
    </v-container> -->

    <div v-for="partner in partners" class="mw-1000">
      <div class="responsive">
        <div class="img">
          <a target="_blank" :href="partner.get('Link')">
            <img :src="partner.get('Photo')[0].url" alt="Trolltunga Norway" width="300" height="200">
          </a>
          <div class="desc">
            <b>{{ partner.get('Name') }}</b><br>
            <!-- {{ partner.get('Title') }} -->
          </div>
        </div>
      </div>
    </div>

  </section>
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
div.img {
  border: 1px solid #ccc;
  max-width: 300px;
}

div.img:hover {
  border: 1px solid #777;
}

div.img img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
}

@media only screen and (max-width: 700px){
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px){
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
section {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
</style>
