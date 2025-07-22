import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import next from "@next/eslint-plugin-next";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "react": require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y")
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
        sourceType: "module"
      }
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          args: "after-used",
          ignoreRestSiblings: true
        }
      ],
      "@typescript-eslint/no-this-alias": "warn",
      "@typescript-eslint/no-require-imports": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "react/self-closing-comp": "warn"
    }
  }

  ,
  {
    // Configuration for generated files
    files: ["src/generated/**/*"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-undef": "off"
    }
  },
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "**/*.js",
      "src/generated/**",
      "**/*.wasm.js",
      "**/*.edge.js",
      "**/*.edge-esm.js"
    ]
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];