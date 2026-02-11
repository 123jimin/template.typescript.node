// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const config = defineConfig(
    {
        ignores: ["dist/**"],
    },
    eslint.configs.recommended,
    tseslint.configs.strict,
);

export default config;