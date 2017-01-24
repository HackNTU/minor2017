<template>
  <div>
    <div>home</div>
    <foo></foo>
    <bar></bar>
    <parallax></parallax>
  </div>
</template>
<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  name: 'home',
  components: {
    foo: Foo,
    bar: Bar,
  },
}
</script>
<style scoped>
</style>
