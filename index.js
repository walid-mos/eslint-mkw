module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "airbnb",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:cypress/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Global JS
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent", "index"],
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "next/**",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["type"],
        "newlines-between": "always",
      },
    ],
    "no-tabs": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "max-len": 0,
    "no-restricted-syntax": 0,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "import/extensions": 0,
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": "off",
    // Typescript
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/no-var-requires": 0,
    // Node.js
    "node/no-unpublished-import": [
      "error",
      {
        allowModules: ["cypress", "prisma", "@prisma/client", "tailwindcss"],
      },
    ],
    "node/no-missing-import": 0,
    "node/no-unsupported-features/es-syntax": 0,
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "node/no-extraneous-import": "off",
    // React / Next.js
    "@next/next/no-html-link-for-pages": "off",
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/role-supports-aria-props": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/require-default-props": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-no-useless-fragment": [1, { allowExpressions: true }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: ["function-expression", "arrow-function"],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: [
          "tsconfig.json",
          "apps/*/tsconfig.json",
          "packages/*/tsconfig.json",
          "**/*/tsconfig.json",
        ],
      },
    },
  },
};
