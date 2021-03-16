// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    node:true,
    jest: true,
    es2020: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: [
      2,
      'always'
    ]
  }
};
