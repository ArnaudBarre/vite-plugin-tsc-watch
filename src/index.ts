import { Worker } from "worker_threads";
import { resolve } from "path";
import { Plugin } from "vite";

export default function tscPlugin(): Plugin {
  return {
    name: "tsc",
    apply: "serve",
    configureServer: () => {
      new Worker(resolve(__dirname, "./worker"));
    },
  };
}
