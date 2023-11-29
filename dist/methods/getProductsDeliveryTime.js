import { paramsProxy } from "../params.js";

export const getProductsDeliveryTimeProxy = (object) => {
    object.gate = { method: 'get', node: '/products/deliveryTime' }
    return new Proxy(object, paramsProxy);
}