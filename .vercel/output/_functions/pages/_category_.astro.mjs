import { c as createComponent, a as renderTemplate, e as createAstro, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { $ as $$Posts } from '../chunks/Posts_C0LSSGsv.mjs';
import { s as slugify, $ as $$Base } from '../chunks/Base_C-k3BF_h.mjs';
import { g as getSinglePage } from '../chunks/contentParser_DrYUN8wc.mjs';
import 'clsx';
import { c as categoryMapping } from '../chunks/categoryMapping_B_esCGdy.mjs';
import { s as sortByDate } from '../chunks/sortFunctions_DN17Ikpp.mjs';
export { renderers } from '../renderers.mjs';

const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      const categoryName = categoryArray[j];
      const categorySlug = slugify(categoryName);
      const chineseUrl = categoryMapping[categorySlug] || categorySlug;
      taxonomies.push(chineseUrl);
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/Desk/JiaWeiDao/src/lib/taxonomyParser.astro", void 0);

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

const $$Astro = createAstro();
async function getStaticPaths() {
  const categories = await getTaxonomy("posts", "categories");
  return categories.map((category) => {
    return {
      params: { category }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const posts = await getSinglePage("posts");
  const categoryMappingReverse = Object.fromEntries(
    Object.entries(categoryMapping).map(([key, value]) => [value, key])
  );
  const originalSlug = categoryMappingReverse[category] || category;
  const filterByCategory = taxonomyFilter(posts, "categories", originalSlug);
  const sortedPosts = sortByDate(filterByCategory);
  const title = category;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title || "Category" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center text-2xl mb-4"></p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": sortedPosts, "fluid": false })} </div> </div> ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/[category].astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/[category].astro";
const $$url = "/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
