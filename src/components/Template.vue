<!-- 此組件專屬的 HTML 內容 -->
<template>
  <div class="test">

    <!-- mt-5指margin-top=5rem，其他用法詳見 https://vuetifyjs.com/helpers/spacing-->
    <h3 class="mt-5">模板</h3>
    <h5>副標題</h5>
    <p>{{apple}}</p>

  </div>
</template>

<!-- 此組件專屬的 JavaScript -->
<script>
export default {
  name: 'template',
  // 在此 export 的 data 即可在<template/>中使用（data binding）
  data: function(){
    return{
      apple: '蘋果',
    }
  }
}
</script>

<!-- 此組件專屬的 CSS ，不會外洩影響到其他區塊（因為有scoped） -->
<style scoped>
#test {
  border: solid green 1px;
}
</style>
