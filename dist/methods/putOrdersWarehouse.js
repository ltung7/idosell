import { paramsProxy } from "../params.js";

export const putOrdersWarehouseProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/warehouse' }
    return new Proxy(object, paramsProxy);
}