import { paramsProxy } from "../params.js";

export const deleteCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'post', node: '/couriers/pickupPoints/delete' }
    object.appendable = {
        except: [],
        arrayNode: "pickupPointDeleteRequests",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}