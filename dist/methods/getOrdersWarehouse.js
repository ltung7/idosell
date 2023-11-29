import { paramsProxy } from "../params.js";

export const getOrdersWarehouseProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/warehouse' }
    return new Proxy(object, paramsProxy);
}