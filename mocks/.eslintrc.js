module.exports = {
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "rules": {
    "no-console": 0,
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "consistent-return": 0,
    "object-curly-newline": [1, {consistent: true}],
    "no-await-in-loop": 0,
    "array-callback-return": 0,
    "no-empty-pattern": 0,
    "no-continue": 0,
    "react/prefer-stateless-function": 0,
  }
};