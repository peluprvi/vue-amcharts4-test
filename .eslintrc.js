module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [
    {
      files: '**/*.vue',
      rules: {
        'indent': false,
        'prefer-promise-reject-errors': 0,
        'vue/max-attributes-per-line': [1, {
          'singleline': 1,
          'multiline': {
            'max': 1,
            'allowFirstLine': false
          }
        }],
        'vue/html-closing-bracket-newline': ['error', {
          'singleline': 'never',
          'multiline': 'always'
        }],
        'vue/html-closing-bracket-spacing': ['error', {
          'startTag': 'never',
          'endTag': 'never',
          'selfClosingTag': 'always'
        }],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/script-indent': ['error', 2, {
          'baseIndent': 0,
          'switchCase': 1,
          'ignores': []
        }]
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}