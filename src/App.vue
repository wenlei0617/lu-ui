<template>
  <div id="app">
    <button @click="onSubmit">提示</button>
    <button @click="onSubmit2">alert</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        test: '',
        test1: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$confirm('123');
    },
    onSubmit2() {
      this.$alert.warn('23');
    },
  },
};
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
