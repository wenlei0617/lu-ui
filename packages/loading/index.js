import Vue from 'vue';
import LoadingComponent from './index.vue';

const LoadingConstructor = Vue.extend(LoadingComponent);
let instance = null;
let count = 0;

const Loading = (text) => {
  if (!instance) {
    instance = new LoadingConstructor({
      propsData: {
        text,
      },
    });
    instance.$mount();

    instance.close = () => {
      count--;
      if (count === 0) {
        document.body.removeChild(instance.$el);
      }
    };

    instance.show = () => {
      if (count === 0) {
        document.body.appendChild(instance.$el);
      }
      count++;
    };
  }

  return instance;
};

export default Loading;
