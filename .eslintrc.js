module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'key-spacing': ['error', { mode: 'minimum' }],
  },
};
