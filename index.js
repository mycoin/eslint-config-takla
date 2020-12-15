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
      alias: {
        map: [
          ['@', path.resolve('./src/')],
        ],
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    "import/no-unresolved": [
      2,
      {
        "ignore": [
          "^@sys/",
          "^@lofty/",
          "^@pkg/"
        ]
      }
    ],
    'arrow-body-style': 0,
    'func-names': 0,
    'max-len': ['error', {
      code: 140,
    }],
    'no-else-return': 0,
    'no-plusplus': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 0,
    'quote-props': ['error', 'as-needed'],
    'semi': ['error', 'never'],
  },
}
