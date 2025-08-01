import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/couriers/pickupPoints' };
    object.appendable = {
        except: [],
        arrayNode: "pickupPoints",
        index: 0
    };
    object.req = ["courierId", "address", "pickupPointExternalId", "coordinates"];
    object.arrays = ["pickupPoints"];
    return new Proxy(object, paramsProxy);
};
