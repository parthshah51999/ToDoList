module.exports = {
  extends: "airbnb",
  rules: {
    // enable additional rules
    "max-len": ["error", { code: 220 }],
    "one-var": ["error", "always"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "react/prop-types": 0,
    quotes: "double",
  },
  parser: "babel-eslint",
  globals: {
    document: true,
  },
};
