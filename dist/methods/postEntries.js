import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/entries/entries' };
    object.custom = {
        blog: () => { const visibleOnSitesList = object.params.visibleOnSitesList ?? []; visibleOnSitesList.push({ siteId: "display_on_blog" }); return { root: { visibleOnSitesList } }; },
        news: () => { const visibleOnSitesList = object.params.visibleOnSitesList ?? []; visibleOnSitesList.push({ siteId: "display_on_news" }); return { root: { visibleOnSitesList } }; }
    };
    object.appendable = {
        except: ["shopId", "date", "visible", "visibleOnSitesList", "products", "pictureData", "titleLinkType", "link"],
        arrayNode: "langs",
        index: 0
    };
    object.req = ["date", "visible", "shopId", "langId", "visibleOnSitesList"];
    object.arrays = ["visibleOnSitesList", "products", "langs"];
    return new Proxy(object, paramsProxy);
};
