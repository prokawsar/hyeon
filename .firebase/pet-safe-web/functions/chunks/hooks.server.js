import { a as initHandleWrapper } from "./wrappers.js";
import "./state.js";
const handle = initHandleWrapper({
  inlangConfigModule: import("./inlang.config.js"),
  excludedRoutes: [],
  getLanguage: () => void 0
}).use(({ resolve, event }) => resolve(event));
export {
  handle
};
