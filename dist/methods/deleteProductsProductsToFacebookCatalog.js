import { paramsProxy } from "../params.js";

export const deleteProductsProductsToFacebookCatalogProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToFacebookCatalog/delete' }
    return new Proxy(object, paramsProxy);
}