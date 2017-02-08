<template>
  <div>
    <h3>合作夥伴</h3>
    <pre>合作夥伴的一一介紹</pre>
    <div class="">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <v-container fluid="fluid">
      <v-row>

        <v-col xs2="xs2" v-for="i in numbers">
          <v-card class="primary">
            <v-card-text>2</v-card-text>
            {{i}}
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'partners',
  data: function(){
    return {
      numbers: [ 2, 3, 4, 5 ]
    }
  }
}
</script>
<style scoped>
</style>
