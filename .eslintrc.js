module.exports = {
  extends: "@mate-academy/eslint-config",
  env: {
    browser: true
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called"
      }
    ]
  }
};
