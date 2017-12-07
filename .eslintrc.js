module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  plugins: [
    'babel',
    'import',
  ],
  settings: {
    'import/resolver': 'babel-root-import',
  },
  env: {
    'browser': true,
    'amd': true,
    'es6': true,
    'node': true,
    'mocha': true
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'key-spacing': ['error', { mode: 'minimum' }],
  },
};
