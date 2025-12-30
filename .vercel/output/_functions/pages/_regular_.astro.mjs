import { c as createComponent, e as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_C-k3BF_h.mjs';
import { g as getSinglePage } from '../chunks/contentParser_DrYUN8wc.mjs';
import { r as renderEntry } from '../chunks/_astro_content_DPRXjFKT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.filter((page) => page.id).map((page) => ({
    params: {
      regular: page.id
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const { Content } = await renderEntry(page);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </section> ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/[regular].astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/[regular].astro";
const $$url = "/[regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
