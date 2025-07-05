import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/system/processesAutomation' };
    object.req = ["orders"];
    return new Proxy(object, paramsProxy);
};
