import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/responsibility/entities' };
    object.appendable = {
        except: ["type"],
        arrayNode: "entities",
        index: 0
    };
    object.req = ["type", "code", "name", "mail", "country", "city", "street", "zipcode"];
    object.arrays = ["entities"];
    return new Proxy(object, paramsProxy);
};
