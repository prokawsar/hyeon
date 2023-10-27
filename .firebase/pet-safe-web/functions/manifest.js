export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/security.svg","img/banner.png","img/footer-logo.png","img/footer-petsafe.png","img/hero.png","img/logo.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.5ac1cec5.js","app":"_app/immutable/entry/app.cde5b533.js","imports":["_app/immutable/entry/start.5ac1cec5.js","_app/immutable/chunks/scheduler.a9764574.js","_app/immutable/chunks/singletons.460b18ee.js","_app/immutable/entry/app.cde5b533.js","_app/immutable/chunks/environment.44b59ba9.js","_app/immutable/chunks/scheduler.a9764574.js","_app/immutable/chunks/index.ccb3c94d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/inlang/[language].json",
				pattern: /^\/inlang\/([^/]+?)\.json\/?$/,
				params: [{"name":"language","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/inlang/_language_.json/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
