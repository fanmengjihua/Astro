import { c as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { s as slugify, h as humanize, m as markdownify, $ as $$Base } from '../../chunks/Base_C-k3BF_h.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_DrYUN8wc.mjs';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';
import { d as dateFormat } from '../../chunks/dateFormat_BmxpTjpR.mjs';
import '../../chunks/index_CYyG6us9.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Du2GVk34.mjs';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';
import { c as categoryMapping } from '../../chunks/categoryMapping_B_esCGdy.mjs';
import { s as sortByDate } from '../../chunks/sortFunctions_DN17Ikpp.mjs';
import { r as renderEntry } from '../../chunks/_astro_content_DPRXjFKT.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Share;
  const { title, description, slug, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`${className}`, "class")}> <li class="inline-block"> <a aria-label="facebook profile button" href="https://www.facebook.com/profile.php?id=61585617512476" target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "IoLogoFacebook", IoLogoFacebook, {})} </a> </li> <li class="inline-block"> <a aria-label="x profile button" href="https://x.com/Jia_WeiDao" target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "IoLogoTwitter", IoLogoTwitter, {})} </a> </li> <li class="inline-block"> <a aria-label="instagram profile button" href="https://www.instagram.com/weidao.jia/" target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "IoLogoInstagram", IoLogoInstagram, {})} </a> </li> </ul>`;
}, "D:/Desk/JiaWeiDao/src/layouts/components/Share.astro", void 0);

const $$Astro$3 = createAstro();
const $$SimilarPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SimilarPosts;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row gy-4 justify-center"> ${posts.map((post, i) => renderTemplate`<div${addAttribute(`col-12 sm:col-6 md:col-4 ${i === 2 && "hidden md:block"}`, "class")}> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.id}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result, "Image", $$Image, { "class": "group-hover:scale-[1.05] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": 445, "height": 230 })} </a>`} <ul class="mt-4 text-text flex flex-wrap items-center text-sm"> <li class="mb-2 mr-4 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${dateFormat(post.data.date)} </li> <li class="mb-2 mr-4 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} <ul> ${post.data.categories.map((category, i2) => {
    const categorySlug = slugify(category);
    const chineseUrl = categoryMapping[categorySlug] || categorySlug;
    const chineseName = categoryMapping[categorySlug] || humanize(category);
    return renderTemplate`<li class="inline-block"> <a${addAttribute(`/${chineseUrl}`, "href")} class="mr-2 hover:text-primary font-medium"> ${chineseName} ${i2 !== post.data.categories.length - 1 && ","} </a> </li>`;
  })} </ul> </li> </ul> <h3 class="h5"> <a${addAttribute(`/${post.id}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> </div>`)} </div>`;
}, "D:/Desk/JiaWeiDao/src/layouts/components/SimilarPosts.astro", void 0);

const similerItems = (currentItem, allItems, slug) => {
  let categories = [];
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }
  const filterByCategories = allItems.filter(
    (item) => categories.find((category) => item.data.categories.includes(category))
  );
  const mergedItems = [.../* @__PURE__ */ new Set([...filterByCategories])];
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);
  return filterBySlug;
};

const $$Astro$2 = createAstro();
const $$YouTubeEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$YouTubeEmbed;
  const { id, url, width = 560, height = 315, allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", title = "YouTube video", class: className = "" } = Astro2.props;
  let videoId = id ?? null;
  if (!videoId && url) {
    const s = String(url).trim();
    try {
      const u = new URL(s);
      if (u.hostname.includes("youtube.com") && u.searchParams.has("v")) videoId = u.searchParams.get("v");
      else if (u.hostname.includes("youtu.be")) videoId = u.pathname.slice(1);
      else {
        const m = u.pathname.match(/embed\/([A-Za-z0-9_-]{11})/);
        if (m) videoId = m[1];
      }
    } catch (e) {
      const m = s.match(/(?:v=|youtu\.be\/|embed\/)?([A-Za-z0-9_-]{11})/);
      if (m) videoId = m[1];
    }
  }
  const src = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  return renderTemplate`${src ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`youtube-embed ${className}`, "class")} style="position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;"><iframe${addAttribute(src, "src")}${addAttribute(title, "title")}${addAttribute(width, "width")}${addAttribute(height, "height")} loading="lazy" frameborder="0"${addAttribute(allow, "allow")} allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;display:block;"></iframe></div>` : renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer">${url || "YouTube"}</a>`}`;
}, "D:/Desk/JiaWeiDao/src/layouts/components/YouTubeEmbed.astro", void 0);

const $$Astro$1 = createAstro();
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  const allAuthors = await getSinglePage("authors");
  const posts = await getSinglePage("posts");
  const { post } = Astro2.props;
  const similarPosts = similerItems(post, posts, post.slug);
  const { Content } = await renderEntry(post);
  const { title, description, authors, categories, image, date, youtube } = post.data;
  const currentPosts = sortByDate(posts).filter(
    (p) => p.data.authors.map((author) => slugify(author)).includes(slugify(authors[0]))
  );
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <article class="row justify-center"> <div class="md:col-10 text-center"> <h1 class="h2">${unescapeHTML(markdownify(title))}</h1> <ul class="mt-4 flex flex-wrap items-center justify-center text-text"> <li class="mx-3"> ${allAuthors.filter(
    (author) => authors.map((author2) => slugify(author2)).includes(slugify(author.data.title))
  ).map((author) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="flex items-center hover:text-primary font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 50, "width": 50, "class": "mr-2 h-6 w-6 rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="mx-3 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-5 w-5 text-gray-600" })} ${dateFormat(date)} </li> <li class="mx-3 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[18px] w-[18px] text-gray-600" })} <ul> ${categories.map((category, i) => {
    const categorySlug = slugify(category);
    const chineseUrl = categoryMapping[categorySlug] || categorySlug;
    const chineseName = categoryMapping[categorySlug] || humanize(category);
    return renderTemplate`<li class="inline-block"> <a${addAttribute(`/${chineseUrl}`, "href")} class="mr-2 hover:text-primary font-medium"> ${chineseName} ${i !== post.data.categories.length - 1 && ","} </a> </li>`;
  })} </ul> </li> </ul> </div> <div class="col-12 mt-8 mb-2">  ${youtube && renderTemplate`${renderComponent($$result, "YouTubeEmbed", $$YouTubeEmbed, { "id": youtube, "title": title, "class": "rounded-lg mt-6 w-full" })}`} </div> <div class="md:col-10"> <div class="content mb-16 text-left"> ${renderComponent($$result, "Content", Content, { "components": { YouTubeEmbed: $$YouTubeEmbed } })} </div> <div class="flex flex-wrap items-center justify-between"> ${renderComponent($$result, "Share", $$Share, { "className": "social-share mb-4", "title": title, "description": description, "slug": post.id })} </div> </div> </article> </div> </section> <!-- similar posts --> ${similarPosts.length > 0 && renderTemplate`<section class="section pt-0"> <div class="container"> <h2 class="mb-8 text-center h3">Similar Posts</h2> ${renderComponent($$result, "SimilarPosts", $$SimilarPosts, { "posts": similarPosts.slice(0, 3) })} </div> </section>`} <!-- Author Recent Posts --> ${currentPosts.length > 0 && renderTemplate`<section class="section pt-0"> <div class="container"> <h2 class="mb-8 text-center h3">近期收錄配方</h2> <div class="row gy-4 justify-center"> ${currentPosts.slice(0, 3).map((post2) => renderTemplate`<div class="col-12 sm:col-6 md:col-4"> ${post2.data.image && renderTemplate`<a${addAttribute(`/blog/${post2.id}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result, "Image", $$Image, { "class": "group-hover:scale-[1.05] transition duration-300 w-full", "src": post2.data.image, "alt": post2.data.title, "width": 445, "height": 230 })} </a>`} <ul class="mt-4 text-text flex flex-wrap items-center text-sm"> <li class="mb-2 mr-4 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${dateFormat(post2.data.date)} </li> <li class="mb-2 mr-4 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} <ul> ${post2.data.categories.map((category, i) => {
    const categorySlug = slugify(category);
    const chineseUrl = categoryMapping[categorySlug] || categorySlug;
    const chineseName = categoryMapping[categorySlug] || humanize(category);
    return renderTemplate`<li class="inline-block"> <a${addAttribute(`/${chineseUrl}`, "href")} class="mr-2 hover:text-primary font-medium"> ${chineseName} ${i !== post2.data.categories.length - 1 && ","} </a> </li>`;
  })} </ul> </li> </ul> <h3 class="h5"> <a${addAttribute(`/blog/${post2.id}`, "href")} class="block hover:text-primary transition duration-300"> ${post2.data.title} </a> </h3> </div>`)} </div> </div> </section>`}`;
}, "D:/Desk/JiaWeiDao/src/layouts/partials/PostSingle.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const BLOG_FOLDER = "posts";
  const posts = await getSinglePage(BLOG_FOLDER);
  const paths = posts.map((post) => ({
    params: {
      single: post.id
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { post } = Astro2.props;
  const { title, meta_title, image, description } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": post })} ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/blog/[single].astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/blog/[single].astro";
const $$url = "/blog/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
