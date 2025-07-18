import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/series/filter' };
    object.req = ["shopId", "languageId", "serieId"];
    return new Proxy(object, paramsProxy);
};
