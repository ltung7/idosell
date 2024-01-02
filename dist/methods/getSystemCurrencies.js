import { paramsProxy } from "../params.js";
import { date } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/system/currencies' };
    object.custom = {
        date: date({"nodeName":"date","format":"YYYY-MM-DD HH:mm:ss"})
    };
    return new Proxy(object, paramsProxy);
}