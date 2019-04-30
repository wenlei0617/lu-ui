import Select from './select.vue';
import Options from './options.vue';

Select.install = (Vue) => {
  Vue.component(Select.name, Select);
};

Options.install = (Vue) => {
  Vue.component(Options.name, Options);
};

export default {
  Select, Options,
};
