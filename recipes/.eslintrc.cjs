/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
		'eslint:recommended',
		'plugin:vuejs-accessibility/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-essential',
		'@vue/eslint-config-typescript',
		'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': ['warn'],
    'no-unneeded-ternary': 'error',
		'no-nested-ternary': 'error',
		'vue/no-v-html': 'off'
  }
}
