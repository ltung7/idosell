import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/products/productsToFacebookCatalog' }
    return new Proxy(object, paramsProxy);
}