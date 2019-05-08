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
        msg: 'Welcome to Your Vue.js App',
        text:'测试git修改;再次修改；修改并且新增一个test文件',
        show:'一次修改并add;二次修改没add'
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
