import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/marketingZones' };
    object.appendable = {
        except: ["products", "assignment_mode", "marketing_zones", "shops"],
        arrayNode: "shops",
        index: 0
    };
    object.req = ["ident"];
    object.arrays = ["products", "shops"];
    return new Proxy(object, paramsProxy);
};
