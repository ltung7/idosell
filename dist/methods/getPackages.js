import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/packages/packages' };
    object.auth.version = 1;
    object.custom = {
        orders: (orderSerialNumbers) => ({ eventType: "order", eventsIds: Array.isArray(orderSerialNumbers) ? orderSerialNumbers : [orderSerialNumbers] }),
        rma: (rmaIds) => ({ eventType: "rma", eventsIds: Array.isArray(rmaIds) ? rmaIds : [rmaIds] }),
        returns: (returnIds) => ({ eventType: "return", eventsIds: Array.isArray(returnIds) ? returnIds : [returnIds] })
    };
    object.appendable = {
        except: ["deliveryPackageNumbers","returnLabels"],
        arrayNode: "events",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}