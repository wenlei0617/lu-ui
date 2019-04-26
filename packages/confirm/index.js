import Vue from 'vue';
import ConfirmComp from './index.vue';

const Constructor = Vue.extend(ConfirmComp);
let instance = null;
let currentMsg = null;

function defaultCallBack(action) {
  if (!action) currentMsg.reject('cancel');
  currentMsg.resolve(action);
}

const confirm = (data) => {
  if (typeof data !== 'string' && typeof data !== 'object') {
    throw new Error('参数错误,string|object');
  }
  let opt;
  if (typeof data === 'string') {
    opt = {
      message: data,
      type: 'success',
      title: '提示信息',
    }
  } else {
    const { message, type = 'success', title = '提示信息' } = data;
    opt = {
      message, type, title,
    };
  }

  Constructor.prototype.callback = defaultCallBack;

  instance = new Constructor({
    data: opt,
  });

  const el = instance.$mount();

  document.body.appendChild(instance.$el);
  el.visibled = true;

  return new Promise((resolve, reject) => {
    currentMsg = { resolve, reject };
  });
};

['success', 'error'].forEach((type) => {
  confirm[type] = (options) => {
    if (typeof options !== 'string' && typeof options !== 'object') {
      throw new Error('参数错误,string|object');
    }
    if (typeof options === 'string') {
      return confirm({
        message: options,
        type,
      });
    }
    return confirm({
      ...options,
      type,
    });
  };
});

export default confirm;
