import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.jsx"], // Target JSX files in src
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        node: true,
        browser: true,
        document: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // React recommended rules
      "react/react-in-jsx-scope": "off", // No need for React import in JSX (React 17+)
      "react/prop-types": "off",
      semi: ["error", "always"], // Enforce semicolons
    },
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
    },
  },
  {
    files: ["src/**/*.test.jsx"], // Target test files in src
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
      },
    },
  },
];
