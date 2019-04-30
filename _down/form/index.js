import Form from './form.vue';
import FormInput from './input.vue';

Form.install = (Vue) => {
  Vue.component(Form.name, Form);
};

FormInput.install = (Vue) => {
  Vue.component(FormInput.name, FormInput);
};

export default {
  Form, FormInput,
};
