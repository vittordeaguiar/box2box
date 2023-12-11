/* eslint-env node, browser */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Você também pode especificar um número, como 2020, 2021, etc.
    sourceType: 'module'   // Isso permite o uso de import.meta e outras funcionalidades de módulo ES
  },
  env: {
    node: true,
    browser: true
  }
};
