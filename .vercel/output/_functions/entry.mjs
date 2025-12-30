import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D6Ee9ECy.mjs';
import { manifest } from './manifest_CfDvxkhD.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/api/login.astro.mjs');
const _page5 = () => import('./pages/api/register.astro.mjs');
const _page6 = () => import('./pages/api/resetpassword.astro.mjs');
const _page7 = () => import('./pages/api/saveauthor.astro.mjs');
const _page8 = () => import('./pages/api/savepost.astro.mjs');
const _page9 = () => import('./pages/api/uploadimage.astro.mjs');
const _page10 = () => import('./pages/authors/page/_slug_.astro.mjs');
const _page11 = () => import('./pages/authors/_single_.astro.mjs');
const _page12 = () => import('./pages/authors.astro.mjs');
const _page13 = () => import('./pages/blog/_single_.astro.mjs');
const _page14 = () => import('./pages/contact.astro.mjs');
const _page15 = () => import('./pages/page/_slug_.astro.mjs');
const _page16 = () => import('./pages/popular.astro.mjs');
const _page17 = () => import('./pages/search.astro.mjs');
const _page18 = () => import('./pages/_category_.astro.mjs');
const _page19 = () => import('./pages/_regular_.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin.astro", _page3],
    ["src/pages/api/login.js", _page4],
    ["src/pages/api/register.js", _page5],
    ["src/pages/api/resetPassword.js", _page6],
    ["src/pages/api/saveAuthor.js", _page7],
    ["src/pages/api/savePost.js", _page8],
    ["src/pages/api/uploadImage.js", _page9],
    ["src/pages/authors/page/[slug].astro", _page10],
    ["src/pages/authors/[single].astro", _page11],
    ["src/pages/authors/index.astro", _page12],
    ["src/pages/blog/[single].astro", _page13],
    ["src/pages/contact.astro", _page14],
    ["src/pages/page/[slug].astro", _page15],
    ["src/pages/popular.astro", _page16],
    ["src/pages/search.astro", _page17],
    ["src/pages/[category].astro", _page18],
    ["src/pages/[regular].astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4269b887-6b35-4bef-b914-5972df04a535",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
