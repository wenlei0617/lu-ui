module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-trailing-spaces': 0,
    'func-names': 0,
    'no-undef': 0,
    'consistent-return': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
