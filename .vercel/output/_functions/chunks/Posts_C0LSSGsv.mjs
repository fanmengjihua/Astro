import { c as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { g as getSinglePage } from './contentParser_DrYUN8wc.mjs';
import { d as dateFormat } from './dateFormat_BmxpTjpR.mjs';
import { p as plainify, s as slugify, h as humanize } from './Base_C-k3BF_h.mjs';
import './index_CYyG6us9.mjs';
import { $ as $$Image } from './_astro_assets_Du2GVk34.mjs';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';
import { c as categoryMapping } from './categoryMapping_B_esCGdy.mjs';

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const authors = await getSinglePage("authors");
  const { className, posts, fluid } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`row gy-5 gx-4 ${className} ${posts.length == 1 ? "justify-center" : ""} `, "class")}> ${posts.map((post, i) => renderTemplate`<div${addAttribute(i === 0 && fluid != false ? "col-12" : "col-12 sm:col-6", "class")}> ${post.data.image && renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result, "Image", $$Image, { "class": "group-hover:scale-[1.03] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": i === 0 ? 925 : 445, "height": i === 0 ? 475 : 230 })} </a>`} <ul class="mt-6 mb-4 flex flex-wrap items-center text-text"> <li class="mr-5"> ${authors.filter(
    (author) => post.data.authors.map((author2) => slugify(author2)).includes(slugify(author.data.title))
  ).map((author) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="flex items-center hover:text-primary font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 50, "width": 50, "class": "mr-2 h-6 w-6 rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="mr-5 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-5 w-5 text-gray-600" })} ${dateFormat(post.data.date)} </li> <li class="mr-5 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[18px] w-[18px] text-gray-600" })} <ul> ${post.data.categories.map((category, i2) => {
    const categorySlug = slugify(category);
    const chineseUrl = categoryMapping[categorySlug] || categorySlug;
    const chineseName = categoryMapping[categorySlug] || humanize(category);
    return renderTemplate`<li class="inline-block"> <a${addAttribute(`/${chineseUrl}`, "href")} class="mr-2 hover:text-primary font-medium"> ${chineseName} ${i2 !== post.data.categories.length - 1 && ","} </a> </li>`;
  })} </ul> </li> </ul> <h3 class="mb-4"> <a${addAttribute(`/blog/${post.id}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> <p class="text-text line-clamp-2">${plainify(post.body ?? "")}</p> </div>`)} </div>`;
}, "D:/Desk/JiaWeiDao/src/layouts/components/Posts.astro", void 0);

export { $$Posts as $ };
