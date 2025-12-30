import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C-k3BF_h.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="flex h-[40vh] items-center justify-center"> <div class="text-center"> <h1 class="h2 md:h1 mb-4">Error 404</h1> <div class="content"> <p>Page Not Found</p> </div> <a href="/" class="btn btn-primary mt-8">Back to home</a> </div> </div> </div> </section> ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/404.astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
