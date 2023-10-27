import { i as initRuntimeWithLanguageInformation, d as detectLanguage } from "./detectLanguage.js";
import { g as getResource, a as getRuntimeFromLocals, i as initState, b as addRuntimeToLocals } from "./state.js";
const initSvelteKitServerRuntime = ({ language, referenceLanguage, languages }) => {
  const runtime = initRuntimeWithLanguageInformation({
    readResource: (language2) => getResource(language2),
    referenceLanguage,
    languages
  });
  if (language) {
    runtime.loadResource(language);
    runtime.switchLanguage(language);
  }
  return runtime;
};
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle = handlers[i];
      return handle({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const initHandleWrapper = (options) => ({
  use: (handle) => {
    let runtime;
    const excludedRoutes = [
      "/inlang",
      "/[fallback]",
      ...options.excludedRoutes || []
      // user defined excluded routes
    ];
    return sequence(async ({ event, resolve }) => {
      const pathname = event.url.pathname;
      runtime = getRuntimeFromLocals(event.locals);
      if (runtime) {
        return resolve(event);
      }
      if (excludedRoutes.some((route) => pathname.startsWith(route))) {
        return resolve(event);
      }
      const { referenceLanguage, languages } = await initState(await options.inlangConfigModule);
      let language = options.getLanguage(event);
      if (!language || !languages.includes(language)) {
        if (options.redirect) {
          const detectedLanguage = await detectLanguage({ referenceLanguage, languages }, ...options.initDetectors ? options.initDetectors(event) : []);
          throw options.redirect.throwable(307, options.redirect.getPath(event, detectedLanguage).toString());
        }
        language = void 0;
      }
      runtime = initSvelteKitServerRuntime({
        referenceLanguage,
        languages,
        language
      });
      addRuntimeToLocals(event.locals, runtime);
      return resolve(event, {
        transformPageChunk: language ? async ({ html }) => html.replace("<html", `<html lang="${language}"`) : void 0
      });
    }, (input) => handle(input, runtime));
  }
});
const initRootLayoutServerLoadWrapper = () => ({
  use: (load) => async (event) => {
    const runtime = getRuntimeFromLocals(event.locals);
    event.params.lang;
    return {
      ...await load(event, runtime),
      ...runtime ? {
        "[inlang]": {
          referenceLanguage: runtime.referenceLanguage,
          languages: runtime.languages,
          language: runtime.language
          // TODO: only pass this if `language` gets detected on server
        }
      } : void 0
    };
  }
});
export {
  initHandleWrapper as a,
  initRootLayoutServerLoadWrapper as i
};
