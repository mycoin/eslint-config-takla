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
      alias: {
        extensions: ['.js', '.jsx', '.json'],
        map: [
          ['@', path.resolve('./src')],
        ],
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    'no-else-return': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'quote-props': ['error', 'as-needed'],
    'func-names': 'off',
    'prefer-template': 'off',
    'prefer-arrow-callback': 'off',
    'max-len': ['error', {
      code: 140,
    }],

    'import/extensions': 'off',
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-self-import': 'off',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'off',
    'import/order': 'off',
  },
}
