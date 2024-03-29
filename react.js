/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve("./base"), "plugin:react/jsx-runtime"],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // React
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
};
