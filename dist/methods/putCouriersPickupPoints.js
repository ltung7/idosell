import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/couriers/pickupPoints' };
    object.appendable = {
        except: [],
        arrayNode: "pickupPoints",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}