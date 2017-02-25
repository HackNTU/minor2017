<template>
  <section>
    <h3>合作夥伴</h3>

    <div v-for="partner in partners" class="mw-1000">
      <div class="responsive">
        <div class="img">
          <a target="_blank" :href="partner.get('Link')">
            <img :src="partner.get('Photo')[0].url" alt="Trolltunga Norway" width="300" height="200">
          </a>
          <div class="desc">
            <b>{{ partner.get('Name') }}</b><br>
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
  margin-left: auto;
  margin-right: auto;
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
