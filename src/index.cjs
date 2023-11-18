exports.tscWatch = async function tscWatch(options) {
  return (await import("./index.mjs")).tscWatch(options);
};
