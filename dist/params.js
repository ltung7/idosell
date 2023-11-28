import { sendRequest } from "./request.js";

export const paramsProxy = {
    get: (object, property) => {
        return (...value) => {
            if (property === 'exec') {
                return sendRequest(object);
            }
            else if (object.custom && typeof object.custom[property] === 'function') {
                const param = object.custom[property](...value);
                Object.assign(object.params, param);
            }
            else object.params[property] = value[0];
            return new Proxy(object, paramsProxy);
        }
    }
}