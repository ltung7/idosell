import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/clients' };
    object.appendable = {
        except: [],
        arrayNode: "clients",
        index: 0
    };
    object.req = ["shops", "email", "city", "street", "zipcode", "phone"];
    object.arrays = ["clients"];
    return new Proxy(object, paramsProxy);
};
