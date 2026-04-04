import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/productsToFacebookCatalog' };
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
