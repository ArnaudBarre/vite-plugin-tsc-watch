# Changelog

## 2.0.0

Breaking: Use named export instead of default export for better esm/cjs interop.

To migrate, replace your import by `import { tscPlugin } from "vite-plugin-tsc-watch";`

## 1.0.2

Add vite@3 to peer dependency range

## 1.0.1

Fix: Only start worker once

## 1.0.0

Initial release
