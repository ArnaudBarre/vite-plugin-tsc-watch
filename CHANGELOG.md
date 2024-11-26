# Changelog

## 3.0.2

- Add vite@6 to peer dependency ranges

## 3.0.1

- Rename named export from `tscPlugin` to `tscWatch`
- Add vite@5 and typescript@5 to peer dependency ranges
- Switch plugin to ESM. This removes the CJS warning when using the plugin with Vite 5. A CJS wrapper is still provided but [migrating](https://vitejs.dev/guide/migration.html#deprecate-cjs-node-api) to running Vite in ESM is encouraged
- Drop support for Vite 2 & 3 & node<18 (aligns with Vite 5)

## 2.0.1

Add vite@4 to peer dependency range

## 2.0.0

Breaking: Use named export instead of default export for better esm/cjs interop.

To migrate, replace your import by `import { tscPlugin } from "vite-plugin-tsc-watch";`

## 1.0.2

Add vite@3 to peer dependency range

## 1.0.1

Fix: Only start worker once

## 1.0.0

Initial release
