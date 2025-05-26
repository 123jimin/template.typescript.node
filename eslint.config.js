// @ts-check

import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type { import('eslint').Linter.Config[] } */
const config = [
    {
        ignores: ["dist/**", "test/**"],
    },
    js.configs.recommended,
    {
        files: ["src/**/*.{js,ts}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": /** @type {import('eslint').ESLint.Plugin} */(/** @type{unknown} */(tsPlugin)),
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
        },
    },
];

export default config;