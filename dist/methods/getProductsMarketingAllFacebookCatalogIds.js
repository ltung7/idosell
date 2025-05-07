import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/marketing/allFacebookCatalogIds' };
    return new Proxy(object, paramsProxy);
};
