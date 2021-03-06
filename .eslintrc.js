module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgorePattern": "next" }],
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
        "files": ["*.test.js", "*.spec.js"],
        "rules": {
            "no-unused-expressions": "off"
        }
    }
  ],
};
