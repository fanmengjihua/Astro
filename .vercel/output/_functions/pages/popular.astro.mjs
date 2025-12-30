import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { $ as $$Posts } from '../chunks/Posts_C0LSSGsv.mjs';
import { $ as $$Base } from '../chunks/Base_C-k3BF_h.mjs';
import { g as getSinglePage } from '../chunks/contentParser_DrYUN8wc.mjs';
export { renderers } from '../renderers.mjs';

const $$Popular = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getSinglePage("posts");
  const sortedByViews = [...posts].sort((a, b) => (b.data.views || 0) - (a.data.views || 0));
  const title = "\u70ED\u95E8\u6392\u884C";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center text-2xl mb-4"></p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": sortedByViews, "fluid": false })} </div> </div> ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/popular.astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/popular.astro";
const $$url = "/popular";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Popular,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
