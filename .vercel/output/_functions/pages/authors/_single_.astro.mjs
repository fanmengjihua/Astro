import { c as createComponent, e as createAstro, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, a as renderTemplate, f as addAttribute } from '../../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { m as markdownify, a as $$Social, s as slugify, $ as $$Base, h as humanize } from '../../chunks/Base_C-k3BF_h.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_DrYUN8wc.mjs';
import { d as dateFormat } from '../../chunks/dateFormat_BmxpTjpR.mjs';
import { s as sortByDate } from '../../chunks/sortFunctions_DN17Ikpp.mjs';
import '../../chunks/index_CYyG6us9.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Du2GVk34.mjs';
import { c as categoryMapping } from '../../chunks/categoryMapping_B_esCGdy.mjs';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';
import { r as renderEntry } from '../../chunks/_astro_content_DPRXjFKT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$AuthorSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthorSingle;
  const { author } = Astro2.props;
  const { title, image, social } = author.data;
  const { Content } = await renderEntry(author);
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="mb-4 text-center md:px-24"> ${image && renderTemplate`<div class="mb-8"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "mx-auto rounded-lg", "height": 150, "width": 150, "alt": title })} </div>`} <h1 class="page-heading h2 mb-8">${unescapeHTML(markdownify(title))}</h1> ${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons-simple" })} <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </section>`;
}, "D:/Desk/JiaWeiDao/src/layouts/partials/AuthorSingle.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const authors = await getSinglePage("authors");
  const paths = authors.map((author) => ({
    params: {
      single: slugify(author.data.title)
    },
    props: { author }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { author } = Astro2.props;
  const { title, meta_title, description, image } = author.data;
  const posts = await getSinglePage("posts");
  const sortPostsByDate = sortByDate(posts);
  const currentPosts = sortPostsByDate.filter((post) => {
    return post.data.authors.map((author2) => slugify(author2)).includes(slugify(title));
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthorSingle", $$AuthorSingle, { "author": author })} ${currentPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="section pt-0"> <div class="container"> <h2 class="mb-8 text-center h3">Recent Posts</h2> <div${addAttribute(`row gy-4 ${currentPosts.length < 3 ? "justify-center" : ""}`, "class")}> ${currentPosts.map((post) => renderTemplate`<div class="col-12 sm:col-6 lg:col-4"> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.id}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result2, "Image", $$Image, { "class": "group-hover:scale-[1.05] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": 445, "height": 230 })} </a>`} <ul class="mt-4 text-text flex flex-wrap items-center text-sm"> <li class="mb-2 mr-4 flex items-center flex-wrap font-medium"> ${renderComponent($$result2, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${dateFormat(post.data.date)} </li> <li class="mb-2 mr-4 flex items-center flex-wrap"> ${renderComponent($$result2, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} <ul> ${post.data.categories.map((category, i) => {
    const categorySlug = slugify(category);
    const chineseUrl = categoryMapping[categorySlug] || categorySlug;
    const chineseName = categoryMapping[categorySlug] || humanize(category);
    return renderTemplate`<li class="inline-block"> <a${addAttribute(`/${chineseUrl}`, "href")} class="mr-2 hover:text-primary font-medium"> ${chineseName} ${i !== post.data.categories.length - 1 && ","} </a> </li>`;
  })} </ul> </li> </ul> <h3 class="h5"> <a${addAttribute(`/${post.id}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> </div>`)} </div> </div> </section>`}` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/authors/[single].astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/authors/[single].astro";
const $$url = "/authors/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
