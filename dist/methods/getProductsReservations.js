import { paramsProxy } from "../params.js";

export const getProductsReservationsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/reservations' }
    return new Proxy(object, paramsProxy);
}