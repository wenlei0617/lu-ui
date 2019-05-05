import { Alert } from '../../packages/message-box';

describe('Alert', () => {
  afterEach(() => {
    const el = document.querySelector('.lu-confirm');
    if (!el) return;
    if (el) {
      el.parentNode.removeChild(el);
    }
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('内容（message）是否显示', (done) => {
    Alert('是否显示');
    setTimeout(() => {
      const el = document.querySelector('.lu-confirm__message');
      expect(el.textContent).toEqual('是否显示');
      done();
    }, 300);
  });

  it('是否显示正确的标题', (done) => {
    Alert({
      message: '内容',
      title: '提示信息2',
    });
    setTimeout(() => {
      const el = document.querySelector('.lu-confirm span');
      expect(el.textContent).toEqual('提示信息2');
      done();
    }, 300);
  });

  it('是否显示默认标题', (done) => {
    Alert('message');
    setTimeout(() => {
      const el = document.querySelector('.lu-confirm__title span');
      expect(el.textContent).toEqual('提示信息');
      done();
    }, 300);
  });

  it('是否显示成功图标', (done) => {
    Alert.success('成功');
    setTimeout(() => {
      const el = document.querySelector('.lu-confirm__text--success');
      expect(el).not.toBeNull;
      done();
    }, 300);
  });

  it('是否可关闭', (done) => {
    Alert('是否显示');
    setTimeout(() => {
      const el = document.querySelector('.lu-confirm__confirm');
      el.click();
      expect(document.querySelector('.lu-confirm')).toBeNull;
      done();
    }, 300);
  });
});
