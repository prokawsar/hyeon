import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.47bd56e3.js","_app/immutable/chunks/singletons.460b18ee.js","_app/immutable/chunks/scheduler.a9764574.js","_app/immutable/chunks/environment.44b59ba9.js","_app/immutable/chunks/index.ccb3c94d.js","_app/immutable/chunks/stores.2b9af5af.js"];
export const stylesheets = ["_app/immutable/assets/0.542550e6.css","_app/immutable/assets/tooltip.cc4e381a.css"];
export const fonts = [];
