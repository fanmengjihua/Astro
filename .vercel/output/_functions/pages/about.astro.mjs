import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_C-k3BF_h.mjs';
import '../chunks/index_CYyG6us9.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Du2GVk34.mjs';
import { g as getEntry, r as renderEntry } from '../chunks/_astro_content_DPRXjFKT.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("about", "-index");
  const { Content } = await renderEntry(entry);
  const { title, meta_title, image } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row md:gx-4"> <div class="sm:col-5 md:col-4"> ${image && renderTemplate`<div class="img-cover mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "width": 295, "height": 395, "alt": title, "class": "rounded-lg w-full" })} </div>`} </div> <div class="sm:col-7 md:col-8"> <h1 class="h3 mb-8">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> <a href="/contact" class="btn btn-primary text-white py-2">聯絡我們</a> </div> </div> </div> </section> ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/about.astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
