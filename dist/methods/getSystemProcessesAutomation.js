import { paramsProxy } from "../params.js";

export const getSystemProcessesAutomationProxy = (object) => {
    object.gate = { method: 'get', node: '/system/processesAutomation' }
    return new Proxy(object, paramsProxy);
}