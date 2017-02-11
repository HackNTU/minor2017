<template>
  <div>
    <v-container>
      <h3>評審介紹</h3>
      <h6>圖片、姓名、稱號、簡介...</h6>

      <div v-for="reviewer in reviewers">
        <!-- RWD reference example: http://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery_responsive -->
        <div class="responsive">
          <div class="img">
            <a target="_blank" :href="reviewer.get('More')">
              <img :src="reviewer.get('Photo')[0].url" alt="Trolltunga Norway" width="300" height="200">
            </a>
            <div class="desc">
              <b>{{ reviewer.get('Name') }}</b><br>
              {{ reviewer.get('Title') }}
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </v-container>

  </div>
</template>


<script>
import { reviewers } from '../service/airtable.js'
export default {
  name: 'reviewer',
  data: function(){
    return {
      reviewers: reviewers
    }
  }
}
</script>
<style scoped>

/* for responsive row */
div.img {
  border: 1px solid #ccc;
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

</style>
