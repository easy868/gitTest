<template>
  <div class="hello">
    <h1>hello</h1>
    <h2 @click="$router.push('/world')">跳转</h2>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 1300px;
    background: #f5f5f5;
  }

  h2 {
    margin-top: 300px;
  }
</style>
