import { c as createComponent, e as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { $ as $$Authors } from '../../../chunks/Authors_D4y30FXV.mjs';
import { c as config, $ as $$Base, m as markdownify } from '../../../chunks/Base_C-k3BF_h.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_BPqxvsJm.mjs';
import { g as getSinglePage } from '../../../chunks/contentParser_DrYUN8wc.mjs';
import { s as sortByDate } from '../../../chunks/sortFunctions_DN17Ikpp.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const authors = await getSinglePage("authors");
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const authors = await getSinglePage("authors");
  const sortedPosts = sortByDate(authors);
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="page-heading h2">${markdownify("Authors")}</h1> ${renderComponent($$result2, "Authors", $$Authors, { "authors": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": currentPage, "totalPages": totalPages })} </div> </section> ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/authors/page/[slug].astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/authors/page/[slug].astro";
const $$url = "/authors/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
