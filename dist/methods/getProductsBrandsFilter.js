import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/brands/filter' };
    object.req = ["shopId", "languageId", "producerId"];
    return new Proxy(object, paramsProxy);
};
