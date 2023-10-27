import { j as json } from "../../../../chunks/index.js";
import { i as initState, r as reloadResources, g as getResource } from "../../../../chunks/state.js";
const entries = async () => {
  const { languages } = await initState(await import("../../../../chunks/inlang.config.js"));
  return languages.map((language) => ({ language }));
};
const GET = async ({ params: { language } }) => {
  await reloadResources();
  return json(getResource(language) || null);
};
export {
  GET,
  entries
};
