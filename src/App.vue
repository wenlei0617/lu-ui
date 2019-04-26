<template>
  <div id="app">
    <lu-form ref="form" :data="data">
      <div>
        <lu-form-input 
          :required="true"
          v-model="data.test" 
          :rules="{validator: /^.{1,2}$/, msg: '验证错误'}"/>
      </div>
      <ul>
        <li>
          <lu-form-input v-model="data.test1"/>
        </li>
      </ul>
      <button @click.prevent="onSubmit">确定</button>
    </lu-form>
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
      this.$refs.form.validate().then(() => {
        console.log('通过');
      }).catch(() => {
        console.log('未通过');
      });
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
