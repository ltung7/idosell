import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/deliveries/defaultProfiles' }
    return new Proxy(object, paramsProxy);
}