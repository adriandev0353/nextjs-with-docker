module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "import"],
  root: true,
  rules: {
    // will allow us to ! use in typescript. Just make sure we are guarantee it needs wil be assigned. dont even display warning
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,

    // no console logs
    'no-console': 'error',

    // adds line after all imports
    "import/newline-after-import": ["error", { "count": 1 }],

    // add proper spacing between statements and blocks of code
    'padding-line-between-statements': [
      'error',
      // groups all imports together
      { blankLine: 'never', prev: 'import', next: 'import' },

      // blank line after declaration section, imports and blocks of code
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'block', 'block-like'],
        next: '*',
      },

      // blank line before export
      { blankLine: 'always', prev: '*', next: ['export'] },

      // group all declarations together
      {
        blankLine: 'never',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],

    // only 1 line of spacing. no mutliple lines
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],

    // wont allow padding in blocks of code
    'padded-blocks': ['error', 'never'],
  },
  env: {
    node: true,
  },
}
