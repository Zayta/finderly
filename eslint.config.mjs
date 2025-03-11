import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extending core Next.js configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Adding custom configurations
  {
    ignores: [".config/*"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 0 }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-indent": ["warn", 2],
      "react/jsx-indent-props": ["warn", 2],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars":"warn"
    },
  },
];

export default eslintConfig;
