import { Worker } from "node:worker_threads";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import { dirname } from "path";
import { fileURLToPath } from "url";

let started = false;

export function tscWatch(): Plugin {
  return {
    name: "tsc",
    apply: "serve",
    configureServer: async () => {
      if (started) return;
      new Worker(
        resolve(dirname(fileURLToPath(import.meta.url)), "./worker.cjs"),
      );
      started = true;
    },
  };
}
