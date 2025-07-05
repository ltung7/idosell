import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/entries/entries' };
    object.req = ["entryId", "shopId"];
    object.arrays = ["visibleOnSitesList", "products", "langs"];
    return new Proxy(object, paramsProxy);
};
