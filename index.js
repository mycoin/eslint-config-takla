const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
  },
  globals: {
    jQuery: true,
    F: true,
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'import',
    'react',
  ],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.jsx', '.json'],
        packages: [
          'packages/*',
        ],
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

    'import/extensions': 0,
    'import/named': 0,
    'import/no-cycle': 0,
    'import/no-duplicates': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-self-import': 0,
    'import/no-unresolved': 0,
    'import/no-useless-path-segments': 0,
    'import/order': 0,
  },
}
