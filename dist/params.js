import { sendRequest, countResults, params } from "./request.js";

const requests = {
    exec: sendRequest,
    count: countResults,
    params
}

export const paramsProxy = {
    get: (object, property) => {
        return (...values) => {
            if (requests[property]) {
                return requests[property](object, values[0]);
            }
            else if (object.custom && typeof object.custom[property] === 'function') {
                if (property === 'page') values.push(Boolean(object.snakeCase));
                const param = object.custom[property](...values);
                Object.assign(object.params, param);
            }
            else object.params[property] = values[0];
            return new Proxy(object, paramsProxy);
        }
    }
}