module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: { commonjs: true, es2021: true, node: true, browser: false },
  globals: { strapi: true },
  parserOptions: { sourceType: "module" },
  rules: {
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
