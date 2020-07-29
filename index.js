const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  globals: {
    jQuery: true,
    F: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@': path.resolve('./src'),
        },
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    'no-else-return': 0,
    'no-plusplus': 0,
    'arrow-body-style': 0,
    'quote-props': ['error', 'as-needed'],
    'func-names': 0,
    'prefer-template': 0,
    'prefer-arrow-callback': 0,
    'max-len': ['error', {
      code: 140,
    }],
  },
}
