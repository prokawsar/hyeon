const inlangSymbol = Symbol.for("inlang");
const addRuntimeToData = (data, runtime) => ({ ...data || {}, [inlangSymbol]: runtime });
const getRuntimeFromData = (data) => data[inlangSymbol];
const addRuntimePromiseToEvent = (event, runtimePromise) => {
  event.params[inlangSymbol] = runtimePromise;
  return event;
};
const getRuntimePromiseFromEvent = (event) => event.params[inlangSymbol];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export {
  addRuntimeToData as a,
  getRuntimePromiseFromEvent as b,
  addRuntimePromiseToEvent as c,
  getRuntimeFromData as g,
  inlangSymbol as i,
  wait as w
};
