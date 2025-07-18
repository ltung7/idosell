import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/menu/menu' };
    object.req = ["shop_id", "lang_id", "menu_id"];
    return new Proxy(object, paramsProxy);
};
