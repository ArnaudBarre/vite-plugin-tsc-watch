// @ts-check
const { relative } = require("node:path");
const {
  createSolutionBuilderWithWatchHost,
  createSolutionBuilderWithWatch,
  sys,
} = require("typescript");

const host = createSolutionBuilderWithWatchHost(
  sys,
  undefined,
  (log) => {
    const message =
      typeof log.messageText === "string"
        ? log.messageText
        : log.messageText.messageText;
    if (log.file && log.start !== undefined) {
      const position = log.file.getLineAndCharacterOfPosition(log.start);
      const name = relative("", log.file.fileName);
      const line = position.line + 1;
      const char = position.character + 1;
      console.log(`${name}(${line},${char}): ${message}`);
    } else {
      console.log(message);
    }
  },
  // Don't report file watcher status (Starting incremental, Watching for file changes, ...)
  () => undefined,
  () => undefined
);

const builder = createSolutionBuilderWithWatch(host, ["tsconfig.json"], {});

builder.build();
