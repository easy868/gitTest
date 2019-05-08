<template>
  <div class="hello">
    <h1>world</h1>
    <h2 @click="$router.go(-1)">返回</h2>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        now:'新建了hello.vue'
      }
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 1500px;
    background: #666;
  }
</style>
