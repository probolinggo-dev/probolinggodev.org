module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "arrowFunctions": true,
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "flowtype",
    "react"
  ],
  "rules": {
    "no-unused-vars": 0,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
  }
};
