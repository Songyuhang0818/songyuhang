<template>
    <div id="div1">
        真难配
      <router-link to="/subTest1/">subtest1</router-link>
      <router-link to="/subTest2/">subtest2</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
  #div1{
    height: 300px;
    background: #ff0000;
  }
</style>