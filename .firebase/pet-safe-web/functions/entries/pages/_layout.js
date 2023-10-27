import { i as initRuntimeWithLanguageInformation, d as detectLanguage } from "../../chunks/detectLanguage.js";
import { b as base } from "../../chunks/paths.js";
import { a as addRuntimeToData, b as getRuntimePromiseFromEvent, w as wait, c as addRuntimePromiseToEvent } from "../../chunks/utils.js";
const initSvelteKitClientRuntime = async ({ fetch, language, referenceLanguage, languages, cache: cache2 = {} }) => {
  const runtime = initRuntimeWithLanguageInformation({
    readResource: async (language2) => cache2[language2] ?? (cache2[language2] = await fetch(`${base}/inlang/${language2}.json`).then((response) => response.ok ? response.json() : void 0)),
    referenceLanguage,
    languages
  });
  if (language) {
    await runtime.loadResource(language);
    runtime.switchLanguage(language);
  }
  return runtime;
};
const cache = {};
const initRuntimeForWrappers = async (event, options) => {
  const existingPromise = getRuntimePromiseFromEvent(event);
  if (existingPromise)
    return existingPromise;
  if (!options) {
    await wait(0);
    return initRuntimeForWrappers(event, options);
  }
  let resolveRuntimePromise = void 0;
  addRuntimePromiseToEvent(event, new Promise((resolve) => resolveRuntimePromise = resolve));
  const runtime = await initRuntime(event, options, event.data["[inlang]"]);
  resolveRuntimePromise(runtime);
  return runtime;
};
const initRuntime = async (event, options, data) => {
  if (!data) {
    const useWarn = (defaultValue) => () => console.warn("inlang was not correctly set up on this page. Please check `routing.exclude` in your `inlang.config.js` file.") || defaultValue;
    return {
      i: useWarn(""),
      loadResource: useWarn(),
      switchLanguage: useWarn(),
      languages: []
    };
  }
  const { referenceLanguage, languages, language: lang } = data;
  const language = lang || !options.initDetectors ? lang : await detectLanguage({ referenceLanguage, languages }, ...options.initDetectors(event));
  return initSvelteKitClientRuntime({
    fetch: event.fetch,
    language,
    referenceLanguage,
    languages,
    cache
  });
};
const initRootLayoutLoadWrapper = (options) => ({
  use: (load2) => async (event) => {
    const runtime = await initRuntimeForWrappers(event, options);
    const payload = await load2(event, runtime);
    const { "[inlang]": _, ...data } = payload || event.data;
    return addRuntimeToData(data, runtime);
  }
});
const load = initRootLayoutLoadWrapper({
  initDetectors: void 0
}).use(async () => {
  return;
});
export {
  load
};
