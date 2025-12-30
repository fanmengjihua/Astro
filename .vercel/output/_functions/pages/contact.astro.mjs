import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, f as addAttribute } from '../chunks/astro/server_BChoP70d.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify, c as config } from '../chunks/Base_C-k3BF_h.mjs';
import { g as getEntry } from '../chunks/_astro_content_DPRXjFKT.mjs';
import { FaEnvelope } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry(
    "contact",
    "-index"
  );
  const { contact_form_action } = config.params;
  const { email } = config.contactinfo;
  const { title, description, meta_title, image } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="row md:gx-5 gy-5"> <div class="sm:col-5 md:col-4"> <p class="mb-8 text-2xl font-bold text-text-dark">聯絡資訊</p> <ul class="flex flex-col space-y-8"> <li> <div class="flex text-text-dark items-center text-xl"> ${renderComponent($$result2, "FaEnvelope", FaEnvelope, { "className": "mr-3 text-primary" })} <p class="font-semibold">電子郵件</p> </div> <p class="mt-2 leading-5 pl-8 content">${unescapeHTML(markdownify(email))}</p> </li> </ul> </div> <div class="sm:col-7 md:col-8"> <form class="contact-form row gy-2 justify-center" method="POST"${addAttribute(contact_form_action, "action")}> <div class="lg:col-6"> <label class="mb-2 block" for="name">姓名 <span class="text-red-600">*</span></label> <input class="form-input w-full" name="name" type="text" required> </div> <div class="lg:col-6"> <label class="mb-2 block" for="email">電子郵件 <span class="text-red-600">*</span></label> <input class="form-input w-full" name="email" type="email" required> </div> <div class="col-12"> <label class="mb-2 block" for="subject">主旨</label> <input class="form-input w-full" name="subject" type="text"> </div> <div class="col-12"> <label class="mb-2 block" for="message">訊息 <span class="text-red-600">*</span></label> <textarea class="form-textarea w-full" rows="4"></textarea> </div> <div class="col-12"> <button class="btn btn-primary mt-2">立即提交</button> </div> </form> </div> </div> </div> </section> ` })}`;
}, "D:/Desk/JiaWeiDao/src/pages/contact.astro", void 0);

const $$file = "D:/Desk/JiaWeiDao/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
