import Select from './select/index';
import Loading from './loading/index';
import Form from './form/index';
import { Confirm, Alert } from './confirm/index';

const components = [
  Select.Select,
  Select.Options,
  Form.Form,
  Form.FormInput,
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
  Select: Select.Select,
  Options: Select.Options,
  From: Form.Form,
  FormInput: Form.FormInput,
  Loading,
};
