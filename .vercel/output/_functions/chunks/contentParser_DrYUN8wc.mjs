import { c as createComponent, a as renderTemplate } from './astro/server_BChoP70d.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getCollection } from './_astro_content_DPRXjFKT.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => {
    const pageData = data.data;
    return pageData.draft !== true;
  });
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/Desk/JiaWeiDao/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
