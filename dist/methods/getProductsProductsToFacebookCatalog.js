import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/productsToFacebookCatalog' };
    object.req = ["facebookCatalogId", "shopId"];
    return new Proxy(object, paramsProxy);
};
