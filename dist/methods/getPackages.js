import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/packages/packages' };
    object.appendable = {
        except: ["deliveryPackageNumbers","returnLabels"],
        arrayNode: "events",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}