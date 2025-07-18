import { sendRequest, countResults, getParams, hasNext, toString } from "./request.js";
const getAttributes = (obj) => Object.keys(obj).slice(3);
const requests = {
    exec: sendRequest,
    count: countResults,
    getParams,
    hasNext,
    toString,
    getAttributes,
    setParams: (object, value, receiver) => {
        object.params = value;
        return receiver;
    }
};
export const paramsProxy = {
    get: (object, property, receiver) => {
        if (property === 'then') {
            return Promise.resolve(object);
        }
        return (...values) => {
            if (requests[property]) {
                return requests[property](object, values[0], receiver);
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
                    if (param.root)
                        Object.assign(object.params, param.root);
                    else
                        Object.assign(item, param);
                }
                else {
                    item[property] = values[0];
                }
            }
            else if (object.custom && typeof object.custom[property] === 'function') {
                if (property === 'page') {
                    values = [values[0] ?? 0, values[1] ?? 100, Boolean(object.snakeCase)];
                }
                const param = object.custom[property](...values);
                Object.assign(object.params, param);
            }
            else if (object.arrays && object.arrays.includes(property)) {
                if (Array.isArray(values[0]))
                    object.params[property] = values[0];
                else
                    object.params[property] = [values[0]];
            }
            else {
                object.params[property] = values[0];
            }
            if (object.custom?.page && property !== 'page') {
                if (object.params.resultsPage)
                    delete object.params.resultsPage;
                if (object.params.results_page)
                    delete object.params.results_page;
            }
            return receiver;
        };
    }
};
