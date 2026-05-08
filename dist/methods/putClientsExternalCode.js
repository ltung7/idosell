import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/externalCode' };
    object.appendable = {
        except: [],
        arrayNode: "clients",
        index: 0
    };
    object.req = [{ "any": ["client_id", "client_login"] }];
    object.arrays = ["clients"];
    return new Proxy(object, paramsProxy);
};
