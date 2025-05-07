import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/marketingZones' };
    object.appendable = {
        except: ["products", "assignment_mode", "marketing_zones"],
        arrayNode: "shops",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
