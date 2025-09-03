import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/marketingZones' };
    object.appendable = {
        except: ["assignment_mode", "shops", "marketing_zones"],
        arrayNode: "products",
        index: 0
    };
    object.req = ["ident"];
    object.arrays = ["products", "shops"];
    return new Proxy(object, paramsProxy);
};
