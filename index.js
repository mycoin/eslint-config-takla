const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb'],
  plugins: ['import'],
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
      alias: {
        map: [['@', path.resolve('./src/')]],
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@weex-module/'],
      },
    ],
    'arrow-body-style': 0,
    'func-names': 0,
    'max-len': [
      'error',
      {
        code: 140,
      },
    ],
    'class-methods-use-this': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/iframe-has-title': 0,
    'no-else-return': 0,
    'no-else-return': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    'object-curly-newline': 0,
    'prefer-arrow-callback': 0,
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'quote-props': ['error', 'consistent-as-needed'],
    semi: ['error', 'never'],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': [0],
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-indent': 'error',
    'react/jsx-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-deprecated': 0,
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/sort-comp': 0,
  },
}
