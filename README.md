# Node.js TypeScript Template

This repository provides a minimal yet complete starting point for building a Node.js library written in TypeScript.

## Features

- [TypeScript](https://www.typescriptlang.org/) compilation with `tsc`.
- [ESLint](https://eslint.org/) configuration for consistent code style.
- [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) for testing.
- Uses `pnpm` for dependency management.

## Getting Started

### Using a Bootstrap Script

### Manual Setup

1. Choose a license to use, and replace the `LICENSE` file and the `license` field in `package.json`.
2. Search for all placeholder values in `package.json` (via searching `placeholder`) and replace them.
3. Install dependencies with `pnpm install` and update them with `pnpm up --latest`.
    - [Install `pnpm`](https://pnpm.io/installation) if you don't have it already.
4. Replace the contents of this README with a description of your library.

## Development

- `pnpm build` – compile TypeScript from `src/` into `dist/`.
  - `pnpm build:watch` – recompile on every file change.
- `pnpm test` – run unit tests located in `src/**/*.spec.ts`.
  - Don't forget to `pnpm build` before running tests!
- `pnpm lint` – run ESLint on the source code.
- `pnpm clean` – remove the `dist/` directory.
