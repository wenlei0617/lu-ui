import Vue from 'vue';
import App from './App.vue';
import router from './router';
import LuUI from '../packages/index';

Vue.config.productionTip = false;
Vue.use(LuUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
