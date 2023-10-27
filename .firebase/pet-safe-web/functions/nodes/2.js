

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4bee0ab6.js","_app/immutable/chunks/scheduler.a9764574.js","_app/immutable/chunks/index.ccb3c94d.js"];
export const stylesheets = ["_app/immutable/assets/2.580fafed.css"];
export const fonts = [];
