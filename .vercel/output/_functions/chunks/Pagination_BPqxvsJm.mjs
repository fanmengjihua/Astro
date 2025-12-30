import { c as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, a as renderTemplate } from './astro/server_BChoP70d.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage, totalPages } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mb-4 flex justify-center space-x-2 text-center" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="border border-gray-400 opacity-40 rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center pointer-events-none"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>`}${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page"${addAttribute(`border border-primary bg-primary rounded-md h-10 w-10 leading-[35px] font-semibold text-white`, "class")}>${pagination}</span>` : renderTemplate`<a${addAttribute(
      i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
      "href"
    )} aria-current="page"${addAttribute(`border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200`, "class")}>${pagination}</a>`
  )}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="border border-gray-400 opacity-40 rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center pointer-events-none"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "D:/Desk/JiaWeiDao/src/layouts/components/Pagination.astro", void 0);

export { $$Pagination as $ };
