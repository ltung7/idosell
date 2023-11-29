import { paramsProxy } from "../params.js";

export const putSystemProcessesAutomationProxy = (object) => {
    object.gate = { method: 'put', node: '/system/processesAutomation' }
    return new Proxy(object, paramsProxy);
}