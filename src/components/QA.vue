<template>
  <div>

    <h3>Q & A</h3>
    <h4>（樣式待補）</h4>
    <v-container>
      <div v-for="qa in qas">
        <blockquote>
          問題：{{qa.get('Question')}}
        </blockquote>
        <p>答案：{{qa.get('Answer')}}</p>
      </div>
    </v-container>
    
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
p {
  padding: 1000;
  margin: 1000;
}
</style>
