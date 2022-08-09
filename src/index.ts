import { Worker } from "worker_threads";
import { resolve } from "path";
import { Plugin } from "vite";

let started = false;

export function tscPlugin(): Plugin {
  return {
    name: "tsc",
    apply: "serve",
    configureServer: async () => {
      if (started) return;
      new Worker(resolve(__dirname, "./worker"));
      started = true;
    },
  };
}
