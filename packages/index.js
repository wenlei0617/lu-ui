import { Confirm, Alert } from './message-box/index';

const components = [

];

const install = (Vue) => {
  Vue.prototype.$confirm = Confirm;
  Vue.prototype.$alert = Alert;

  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
};
