import { c as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { s as slugify, m as markdownify } from './Base_C-k3BF_h.mjs';
import './index_CYyG6us9.mjs';
import { $ as $$Image } from './_astro_assets_Du2GVk34.mjs';
import { BsArrowRightCircle } from 'react-icons/bs';

const $$Astro = createAstro();
const $$Authors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Authors;
  const { authors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row justify-center"> ${authors.map((author) => renderTemplate`<div class="col-12 mb-8 sm:col-6 md:col-4"> ${author.data.image && renderTemplate`<div class="mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 150, "width": 150, "class": "mx-auto rounded-lg" })} </div>`} <h3 class="h4 mt-8 mb-3"> <a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="block hover:text-primary transition duration-200"> ${author.data.title} </a> </h3> ${author.body && renderTemplate`<p class="mb-3">${markdownify(author.body.slice(0, 100))}</p>`} <a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="inline-flex items-center text-primary transition duration-200 hover:opacity-70">
Read More ${renderComponent($$result, "BsArrowRightCircle", BsArrowRightCircle, { "className": "inline ml-2" })} </a> </div>`)} </div>`;
}, "D:/Desk/JiaWeiDao/src/layouts/components/Authors.astro", void 0);

export { $$Authors as $ };
