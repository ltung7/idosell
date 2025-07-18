import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/packages/packages/search' };
    object.custom = {
        orders: (orderSerialNumbers) => ({ eventType: "order", eventsIds: Array.isArray(orderSerialNumbers) ? orderSerialNumbers : [orderSerialNumbers] }),
        rma: (rmaIds) => ({ eventType: "rma", eventsIds: Array.isArray(rmaIds) ? rmaIds : [rmaIds] }),
        returns: (returnIds) => ({ eventType: "return", eventsIds: Array.isArray(returnIds) ? returnIds : [returnIds] })
    };
    object.appendable = {
        except: ["deliveryPackageNumbers", "returnLabels"],
        arrayNode: "events",
        index: 0
    };
    object.req = [{ "any": ["events", "deliveryPackageNumbers"] }];
    object.arrays = ["deliveryPackageNumbers", "events"];
    return new Proxy(object, paramsProxy);
};
