import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/couriers/pickupPoints' };
    object.appendable = {
        except: [],
        arrayNode: "pickupPoints",
        index: 0
    };
    object.req = ["courierId", { "any": ["pickupPointExternalId", "pickupPointId"] }];
    object.arrays = ["pickupPoints"];
    return new Proxy(object, paramsProxy);
};
