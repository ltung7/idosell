import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/pickupPoint' };
    object.req = ["orderSerialNumber", "pickupPointId"];
    return new Proxy(object, paramsProxy);
};
