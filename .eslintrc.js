module.exports = {
  globals: {
    page: true
  },
  // rules: {
  //   'prefer-const': 'off'
  // }
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/electron', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser'
};
