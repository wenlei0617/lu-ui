import Vue from 'vue';
import ConfirmComp from './index.vue';

const Constructor = Vue.extend(ConfirmComp);
let instance = null;
let currentMsg = null;

function defaultCallBack(action) {
  if (!action) currentMsg.reject('cancel');
  currentMsg.resolve(action);
}

function validateOpt(data) {
  if (typeof data !== 'string' && typeof data !== 'object') {
    throw new Error('参数错误,string|object');
  }
  let result;
  if (typeof data === 'string') {
    result = {
      message: data,
      type: '',
      title: '提示信息',
    };
    return result;
  }
  const { message, type = 'success', title = '提示信息' } = data;
  result = {
    message, type, title,
  };
  return result;
}

function createAttr(attrs, func) {
  attrs.forEach((type) => {
    func[type] = (options) => {
      if (typeof options !== 'string' && typeof options !== 'object') {
        throw new Error('参数错误,string|object');
      }
      if (typeof options === 'string') {
        return func({
          message: options,
          type,
        });
      }
      return func({
        ...options,
        type,
      });
    };
  });
}

const Confirm = (data) => {
  Constructor.prototype.callback = defaultCallBack;

  const opt = validateOpt(data);

  instance = new Constructor({
    data: {
      ...opt,
      boxType: 'confirm',
    },
  });

  const el = instance.$mount();

  document.body.appendChild(instance.$el);
  el.visibled = true;

  return new Promise((resolve, reject) => {
    currentMsg = { resolve, reject };
  });
};

createAttr(['success', 'error', 'warn'], Confirm);

const Alert = (data) => {
  const opt = validateOpt(data);
  instance = new Constructor({
    data: {
      ...opt,
      boxType: 'alert',
    },
  });

  const el = instance.$mount();

  document.body.appendChild(instance.$el);
  el.visibled = true;
};

createAttr(['success', 'error', 'warn'], Alert);

export {
  Confirm, Alert,
};
