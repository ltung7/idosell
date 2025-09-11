import { paramsProxy } from "../params.js";
import { appendPackageParams } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/packages/labels' };
    object.custom = {
        orderSn: (orderSn) => ({ root: { eventId: orderSn, eventType: "order" } }),
        size: appendPackageParams(object, "defaultParcelGauge", "auto")
    };
    object.appendable = {
        except: ["eventId", "eventType", "parcelParameters"],
        arrayNode: "parcelParametersByPackages",
        index: 0
    };
    object.req = ["eventId", "eventType"];
    object.arrays = ["parcelParameters", "parcelParametersByPackages"];
    return new Proxy(object, paramsProxy);
};
