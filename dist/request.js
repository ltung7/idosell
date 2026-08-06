import axios from "axios";
import { IdosellFaultStringError } from "./errors.js";
import utils from "./utils.js";
const DECODE_TABLE = [
    ['Å\x82', "ł"],
    ['Ä\x99', 'ę']
];
const DEFAULT_LOG_FUNCTION = console.log;
const catchIdosellError = (err) => {
    if (!err.response) {
        if (err.cause)
            throw err.cause;
        else
            throw new Error('Błąd wysyłania żądania: brak odpowiedzi z serwera');
    }
    if (!err.response.headers['x-error'] && err.response.headers['content-type'].indexOf('json') < 0)
        throw new Error('500: Invalid response from Api gateway');
    let message = err.response.headers['x-error'];
    if (err.response?.data?.errors) {
        let errorObj = err.response?.data?.errors;
        if (Array.isArray(errorObj))
            errorObj = errorObj[0];
        if (errorObj.message)
            message = errorObj.message;
    }
    if (message) {
        for (const [search, replace] of DECODE_TABLE) {
            message = message.replaceAll(search, replace);
        }
    }
    else
        message = 'Unknown error';
    if (err.response.status === 403) {
        const match = message.match(/Scope: ([a-z]+), level: ([rw]{1,2})/);
        if (match) {
            const access = match[2] === 'rw' ? 'Odczyt i zapis' : 'Odczyt';
            const mod = match[1].toUpperCase();
            message = `Brak dostępu do modułu ${mod} (${access})`;
        }
    }
    throw new Error(`${err.response.status}: ${message}`, { cause: err.response.status });
};
function deepEqual(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length)
            return false;
        for (let i = 0; i < keys1.length; i++) {
            const key = keys1[i];
            // If B doesn't have the key, or the values aren't deeply equal, fail early
            if (!Object.prototype.hasOwnProperty.call(obj2, key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }
    // Handles cases where one is an object and the other is a primitive
    return false;
}
const checkNext = (request, response, logPage) => {
    if (logPage === true)
        logPage = DEFAULT_LOG_FUNCTION;
    if (!response)
        return;
    if (response?.errors?.faultString) {
        const faultStructure = {
            faultCode: response?.errors?.faultCode ?? 999,
            faultString: response.errors.faultString,
        };
        throw new IdosellFaultStringError(response.errors.faultString, faultStructure);
    }
    const pagination = utils.getPagination(response);
    if (pagination) {
        const nextPage = pagination.currentPage + 1;
        request.next = nextPage < pagination.totalPages;
        if (request.prev) {
            const deq = deepEqual(request.prev, request.params);
            if (deq)
                throw new Error("Infinite loop detected - reevaluate your request");
        }
        request.prev = { ...request.params };
        if (typeof logPage === 'function') {
            logPage('Page: ' + pagination.currentPage + ' / ' + pagination.totalPages);
        }
        if (request.custom && request.custom.page) {
            const pageObj = request.custom.page(nextPage, pagination.limit);
            Object.assign(request.params, pageObj);
        }
    }
    return response;
};
export const queryfy = (params) => {
    let output = '';
    for (const [key, value] of Object.entries(params)) {
        if (Array.isArray(value)) {
            if (typeof value[0] === 'object') {
                const newValue = value.map(obj => encodeURIComponent(JSON.stringify(obj)));
                output += `${key}=${newValue.join('%2C')}&`;
            }
            else
                output += `${key}=${value.join('%2C')}&`;
        }
        else if (typeof value === 'object') {
            for (const [subkey, subvalue] of Object.entries(value)) {
                output += `${key}%5B${encodeURIComponent(subkey)}%5D=${subvalue}&`;
            }
        }
        else {
            output += `${key}=${value}&`;
        }
    }
    return output.slice(0, -1);
};
const isMissingRequirement = (obj, required) => {
    if (typeof required === 'string') {
        if (obj[required])
            return false;
        else
            return required;
    }
    else if (typeof required === 'function') {
        return required(obj);
    }
    else if (required.any) {
        if (required.any === true) {
            const keys = Object.keys(obj).filter(field => !['results_page', 'results_limit', 'resultsLimit', 'resultsPage'].includes(field)).length;
            if (keys === 0)
                return "Dane wyszukiwania";
            return false;
        }
        for (const field of required.any) {
            if (obj[field] === undefined || obj[field] === null)
                return false;
        }
        return required.any.join(' | ');
    }
    return false;
};
const processRequired = (request) => {
    if (!request.req)
        return;
    const missing = new Set();
    for (const req of request.req) {
        const missingField = isMissingRequirement(request.params, req);
        if (missingField)
            missing.add(missingField);
    }
    if (request.appendable && request.params[request.appendable.arrayNode]) {
        const except = request.appendable.except ?? [];
        for (const item of missing) {
            if (!except.includes(item))
                missing.delete(item);
        }
        for (const req of request.req) {
            if (typeof req === 'string') {
                if (request.appendable.except.includes(req))
                    continue;
            }
            for (const obj of request.params[request.appendable.arrayNode]) {
                const missingField = isMissingRequirement(obj, req);
                if (missingField)
                    missing.add(missingField);
            }
        }
    }
    if (missing.size)
        throw new Error(`Brak wymaganych pól: ${[...missing].join(', ')}`);
};
export const _sendRequest = async (request, options = {}) => {
    if (request.appendable?.arrayNode && request.params[request.appendable.arrayNode]) {
        const array = request.params[request.appendable.arrayNode];
        const last = array[array.length - 1];
        if (typeof last === 'object' && Object.keys(last).length === 0) {
            array.pop();
        }
    }
    if (!options.skipCheck)
        processRequired(request);
    const headers = {
        Accept: 'application/json'
    };
    if (typeof request.auth.apiKey === 'string') {
        headers['X-API-KEY'] = request.auth.apiKey;
    }
    else {
        const { login, password, scope } = request.auth.apiKey;
        let token = request.auth.apiKey.token;
        if (!token) {
            const base64 = Buffer.from(`${login}:${password}`).toString('base64');
            const response = await axios.post(`${request.auth.url}/api/authorize/1/authorize/accessToken`, { scope: scope ?? ['admin'] }, {
                headers: {
                    authorization: `Basic ${base64}`,
                }
            });
            if (response.data.access_token) {
                token = response.data.access_token;
                request.auth.apiKey.token = response.data.access_token;
            }
        }
        headers.authorization = `Bearer ${token}`;
    }
    request.next = false;
    const { method, node } = request.gate;
    let url = `${request.auth.url}/api/admin/v${request.auth.version}${node}`;
    if (options.dump || options.log) {
        const dumpData = { params: request.params, method, url };
        if (options.dump) {
            if (options.dump === true)
                DEFAULT_LOG_FUNCTION(dumpData);
            else
                options.dump(dumpData);
            return {};
        }
        else if (options.log) {
            if (options.log === true)
                DEFAULT_LOG_FUNCTION(dumpData);
            else
                options.log(dumpData);
        }
    }
    if (method === 'get' || method === 'delete') {
        url += '?' + queryfy(request.params);
        const response = await axios[method](url, { headers }).then(response => response.data).catch(catchIdosellError);
        return checkNext(request, response, options.logPage);
    }
    else {
        let body = { params: request.params };
        if (request.rootparams) {
            if (request.rootparams === true)
                body = request.params;
            else
                body = { [request.rootparams]: request.params };
        }
        const response = await axios[method](url, body, { headers }).then(response => response.data).catch(catchIdosellError);
        return checkNext(request, response, options.logPage);
    }
};
/**
 * Everything that needs to happen once, before any axios call is made:
 * appendable array cleanup, required-field validation, auth/token resolution,
 * and base url construction.
 */
const prepareRequest = async (request, options = {}) => {
    if (request.appendable?.arrayNode && request.params[request.appendable.arrayNode]) {
        const array = request.params[request.appendable.arrayNode];
        const last = array[array.length - 1];
        if (typeof last === 'object' && Object.keys(last).length === 0) {
            array.pop();
        }
    }
    if (!options.skipCheck)
        processRequired(request);
    const headers = {
        Accept: 'application/json',
    };
    if (typeof request.auth.apiKey === 'string') {
        headers['X-API-KEY'] = request.auth.apiKey;
    }
    else {
        const { login, password, scope } = request.auth.apiKey;
        let token = request.auth.apiKey.token;
        if (!token) {
            const base64 = Buffer.from(`${login}:${password}`).toString('base64');
            const response = await axios.post(`${request.auth.url}/api/authorize/1/authorize/accessToken`, { scope: scope ?? ['admin'] }, { headers: { authorization: `Basic ${base64}` } });
            if (response.data.access_token) {
                token = response.data.access_token;
                request.auth.apiKey.token = response.data.access_token;
            }
        }
        headers.authorization = `Bearer ${token}`;
    }
    request.next = false;
    const { method, node } = request.gate;
    const baseUrl = `${request.auth.url}/api/admin/v${request.auth.version}${node}`;
    return { headers, baseUrl, method };
};
/**
 * Executes a single axios call for a given set of params, using an already
 * prepared (auth'd) request context. Handles dump/log short-circuiting,
 * GET/DELETE query building vs POST/PUT body building, and checkNext.
 */
const executeCall = async (request, params, prepared, options = {}) => {
    const { headers, baseUrl, method } = prepared;
    let url = baseUrl;
    if (options.dump || options.log) {
        const dumpData = { params, method, url };
        if (options.dump) {
            if (options.dump === true)
                DEFAULT_LOG_FUNCTION(dumpData);
            else
                options.dump(dumpData);
            return {};
        }
        else if (options.log) {
            if (options.log === true)
                DEFAULT_LOG_FUNCTION(dumpData);
            else
                options.log(dumpData);
        }
    }
    if (method === 'get' || method === 'delete') {
        url += '?' + queryfy(params);
        return await axios[method](url, { headers }).then(r => r.data).catch(catchIdosellError);
    }
    else {
        let body = { params };
        if (request.rootparams) {
            if (request.rootparams === true)
                body = params;
            else
                body = { [request.rootparams]: params };
        }
        return await axios[method](url, body, { headers }).then(r => r.data).catch(catchIdosellError);
    }
};
/**
 * Finds the first property on the response whose value is an array.
 * The API names this differently per-endpoint (results, Results, returns,
 * campaigns, etc) so we detect it structurally instead of by name.
 */
const findArrayKey = (obj) => {
    return Object.keys(obj).find(key => Array.isArray(obj[key]));
};
/**
 * Merges an array of same-shaped responses into one, concatenating the
 * paginated array property (whatever it's called) in call order.
 * Non-array properties are taken from the first defined response.
 * Responses that errored (undefined) are skipped.
 */
const mergeResponses = (responses) => {
    const defined = responses.filter((r) => r !== undefined && !r.errors);
    if (defined.length === 0)
        return undefined;
    const base = defined[defined.length - 1];
    const arrayKey = findArrayKey(base);
    if (!arrayKey) {
        // Nothing array-shaped to merge, just return the first response as-is.
        return base;
    }
    const merged = { ...base };
    merged[arrayKey] = defined.flatMap(r => (Array.isArray(r[arrayKey]) ? r[arrayKey] : []));
    return merged;
};
export const sendRequest = async (request, options = {}) => {
    if (options.parallel && options.parallel > 1 && request.custom && request.custom.page)
        return sendMultipleRequest(request, options);
    const prepared = await prepareRequest(request, options);
    const response = await executeCall(request, request.params, prepared, options);
    return checkNext(request, response, options.logPage);
};
const sendMultipleRequest = async (request, options) => {
    const prepared = await prepareRequest(request, options);
    const pagination = utils.getPagination(request.params);
    const currentPage = pagination ? pagination.currentPage : 0;
    const limit = pagination ? pagination.limit : 100;
    const calls = Array.from({ length: options.parallel }, (_, i) => {
        const targetPage = currentPage + i;
        const params = { ...request.params };
        if (typeof request.custom?.page === 'function') {
            const pageObject = request.custom.page(targetPage, limit);
            Object.assign(params, pageObject);
        }
        return executeCall(request, params, prepared, options);
    });
    const responses = await Promise.all(calls);
    const merged = mergeResponses(responses);
    if (merged === undefined)
        return undefined;
    return checkNext(request, merged, options.logPage);
};
export const countResults = async (request, options) => {
    if (!request.custom?.page)
        throw new Error("This request is not countable");
    const pageData = request.custom.page(0, 1);
    Object.assign(request.params, pageData);
    const response = await sendRequest(request, options);
    if (!response)
        return 0;
    const pagination = utils.getPagination(response);
    if (pagination)
        return pagination.totalPages;
    return 0;
};
export const getFirstRecord = async (request, options) => {
    if (!request.custom?.page)
        throw new Error("This request is not countable");
    const pageData = request.custom.page(0, 1);
    Object.assign(request.params, pageData);
    const response = await sendRequest(request, options).catch(err => {
        const cause = err.cause;
        if (cause && 'faultCode' in cause && cause.faultCode === 2)
            return;
        throw err;
    });
    if (!response)
        return;
    const findArrayKey = (obj) => {
        return Object.keys(obj).find(key => Array.isArray(obj[key]));
    };
    const arrayKey = findArrayKey(response);
    if (!arrayKey)
        throw new Error("Response contains no arrays");
    return response[arrayKey][0];
};
export const getParams = (request) => JSON.parse(JSON.stringify(request.params));
export const checkParams = (request) => {
    if (request.appendable?.arrayNode && request.params[request.appendable.arrayNode]) {
        const array = request.params[request.appendable.arrayNode];
        const last = array[array.length - 1];
        if (typeof last === 'object' && Object.keys(last).length === 0) {
            if (array.length === 1)
                delete request.params[request.appendable.arrayNode];
            else
                array.pop();
        }
    }
    processRequired(request);
    return JSON.parse(JSON.stringify(request.params));
    ;
};
export const toString = (request) => JSON.stringify(request.params);
export const hasNext = (request) => request.next;
