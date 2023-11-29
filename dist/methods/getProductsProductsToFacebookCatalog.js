import { paramsProxy } from "../params.js";

export const getProductsProductsToFacebookCatalogProxy = (object) => {
    object.gate = { method: 'get', node: '/products/productsToFacebookCatalog' }
    return new Proxy(object, paramsProxy);
}