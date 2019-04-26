module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => options);
  },
};
