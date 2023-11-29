import { paramsProxy } from "../params.js";

export const postProductsProductsToFacebookCatalogProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToFacebookCatalog' }
    return new Proxy(object, paramsProxy);
}