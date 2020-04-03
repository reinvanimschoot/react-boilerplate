module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "react",
    "simple-import-sort",
    "import",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": ["warn"],
    "import/no-extraneous-dependencies": 0,
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off",
    "import/no-deprecated": "warn",
    "import/no-duplicates": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  }
};