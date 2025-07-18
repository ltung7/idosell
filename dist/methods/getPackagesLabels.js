import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/packages/labels' };
    object.custom = {
        order: (orderSerialNumber) => ({ eventType: "order", eventId: orderSerialNumber }),
        rm: (rmaId) => ({ eventType: "rma", eventId: rmaId }),
        return: (returnId) => ({ eventType: "return", eventId: returnId })
    };
    object.req = ["eventId", "eventType"];
    return new Proxy(object, paramsProxy);
};
