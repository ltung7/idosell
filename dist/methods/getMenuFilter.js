import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/menu/filter' };
    object.req = ["shopId", "languageId", "productMenuTreeId", "productMenuNodeId"];
    return new Proxy(object, paramsProxy);
};
