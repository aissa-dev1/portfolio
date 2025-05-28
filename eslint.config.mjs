import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "plugin:@next/next/recommended",
      "plugin:@next/next/core-web-vitals",
    ],
    plugins: ["@next/next"],
    rules: {
      "@typescript-eslint/no-empty-interface": "off",
    },
  }),
];

export default eslintConfig;
