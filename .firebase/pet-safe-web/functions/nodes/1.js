

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.95010c60.js","_app/immutable/chunks/scheduler.a9764574.js","_app/immutable/chunks/index.ccb3c94d.js","_app/immutable/chunks/stores.2b9af5af.js","_app/immutable/chunks/singletons.460b18ee.js"];
export const stylesheets = [];
export const fonts = [];
