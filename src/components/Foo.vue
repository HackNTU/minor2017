<template>
  <div>
    <div>foo</div>
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
  name: 'foo'
}
</script>
<style scoped>
</style>
