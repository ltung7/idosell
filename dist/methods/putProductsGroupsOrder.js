import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/groups/order' };
    object.custom = {
        productIdsInOrder: (productIds) => { const products = []; let priority = 1; for (const productId of productIds) {
            products.push({ productIdent: { productIdentType: "id", identValue: productId }, priority: priority++ });
        } ; return { productsInOrder: products }; }
    };
    object.appendable = {
        except: [],
        arrayNode: "groups",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
