import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/sizecharts/sizecharts/delete' }
    return new Proxy(object, paramsProxy);
}