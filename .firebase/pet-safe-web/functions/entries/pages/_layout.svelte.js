import { g as getContext, a as setContext, b as get_store_value, c as create_ssr_component } from "../../chunks/ssr.js";
import { i as inlangSymbol, g as getRuntimeFromData } from "../../chunks/utils.js";
import { I as InlangSdkException } from "../../chunks/exceptions.js";
import { p as page } from "../../chunks/stores.js";
const getRuntimeFromContext$1 = () => {
  {
    try {
      return getContext(inlangSymbol);
    } catch (error) {
      throw new InlangSdkException(`You cannot directly access any '@inlang/sdk-js' imports in this scope.
Please read the docs for more information on how to workaround this temporary limitation:
https://inlang.com/documentation/sdk/sveltekit/advanced`, error);
    }
  }
  return getContext(inlangSymbol);
};
const addRuntimeToContext$1 = (context) => setContext(inlangSymbol, context);
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const getRuntimeFromContext = () => getRuntimeFromContext$1();
const addRuntimeToContext = (runtime) => {
  const { language, referenceLanguage, languages, i, loadResource } = runtime;
  const switchLanguage = async (language2) => {
    if (runtime.language === language2)
      return;
    localStorage.setItem("language", language2);
    runtime.switchLanguage(language2);
    return goto(get_store_value(page).url, { invalidateAll: true, noScroll: true });
  };
  addRuntimeToContext$1({
    language,
    referenceLanguage,
    languages,
    i,
    loadResource,
    switchLanguage,
    route
  });
};
const route = (href) => {
  {
    console.info(`Calling the function 'route' is unnecessary with this project configuration, because it only returns the input.`);
  }
  return href;
};
const addRuntimeToGlobalThis = (context) => globalThis[inlangSymbol] = context;
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  addRuntimeToGlobalThis(getRuntimeFromData(data));
  addRuntimeToContext(getRuntimeFromData(data));
  const { referenceLanguage } = getRuntimeFromContext();
  let { i, language } = getRuntimeFromContext();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${language || !referenceLanguage ? ` <main class="bg-gray-20 pb-5">${slots.default ? slots.default({}) : ``}</main>` : ``}`;
});
export {
  Layout as default
};
