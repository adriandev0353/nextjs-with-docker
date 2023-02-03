module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // will allow us to ! use in typescript. Just make sure we are guarantee it needs wil be assigned. dont even display warning
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
  },
  env: {
    node: true,
  }
};