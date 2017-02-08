<template>
  <div>
    <v-container fluid>
    <h3>報名</h3>
    <h6>流程、表單、條列注意事項...</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <v-btn info large>立刻報名</v-btn>
    </v-container>
  </div>
</template>

<script>

import alldata from '../service/airtable.js'
console.log('alldata in Foo: ', alldata); // output three tables as three Arrays of Object

import { qas } from '../service/airtable.js'
console.log('qas in Foo: ', qas); // output 小黑客松-QA table as an Array of Object

import { reviewers } from '../service/airtable.js'
console.log('reviewers in Foo: ', reviewers); // output 小黑客松-QA table as an Array of Object

export default {
  name: 'Q1:'
}
</script>
<style scoped>
</style>
