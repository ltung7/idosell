import { sendRequest, countResults, getParams, hasNext, toString } from "./request.js";
const getAttributes = (obj) => Object.keys(obj).slice(3);
const requests = {
    exec: sendRequest,
    count: countResults,
    getParams,
    hasNext,
    toString,
    getAttributes,
    setParams: (object, value) => {
        object.params = value;
        return new Proxy(object, paramsProxy);
    }
};
export const paramsProxy = {
    get: (object, property) => {
        return (...values) => {
            if (requests[property]) {
                return requests[property](object, values[0]);
            }
            else if (object.appendable && object.appendable.arrayNode !== property && !object.appendable.except.includes(property)) {
                if (!object.params[object.appendable.arrayNode])
                    object.params[object.appendable.arrayNode] = [{}];
                const item = object.params[object.appendable.arrayNode][object.appendable.index];
                if (property === 'append') {
                    ++object.appendable.index;
                    object.params[object.appendable.arrayNode].push({});
                }
                else if (object.custom && typeof object.custom[property] === 'function') {
                    const param = object.custom[property](...values);
                    Object.assign(item, param);
                }
                else {
                    item[property] = values[0];
                }
            }
            else if (object.custom && typeof object.custom[property] === 'function') {
                if (property === 'page')
                    values.push(Boolean(object.snakeCase));
                const param = object.custom[property](...values);
                Object.assign(object.params, param);
            }
            else if (object.arrays && object.arrays.includes(property)) {
                if (Array.isArray(values[0]))
                    object.params[property] = values[0];
                else
                    object.params[property] = [values[0]];
            }
            else
                object.params[property] = values[0];
            return new Proxy(object, paramsProxy);
        };
    }
};
