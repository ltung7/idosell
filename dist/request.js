import axios from "axios";
import { page } from "./helpers.js";
import { inspect } from 'util';
const DECODE_TABLE = [
    ['Å\x82', "ł"],
    ['Ä\x99', 'ę']
];
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
    for (const [search, replace] of DECODE_TABLE) {
        message = message.replaceAll(search, replace);
    }
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
const checkNext = (request, response, logPage) => {
    if (!response)
        return;
    if (response?.errors?.faultCode > 0)
        throw new Error(response.errors.faultString, { cause: response.errors });
    if (response.resultsNumberPage) {
        request.next = response.resultsPage + 1 < response.resultsNumberPage;
        request.params.resultsPage = request.params.resultsPage ? request.params.resultsPage + 1 : 1;
        if (logPage)
            console.log('Page: ' + response.resultsPage + ' / ' + response.resultsNumberPage);
    }
    else if (response.results_number_page) {
        request.next = response.results_page + 1 < response.results_number_page;
        request.params.results_page = request.params.results_page ? request.params.results_page + 1 : 1;
        if (logPage)
            console.log('Page: ' + response.results_page + ' / ' + response.results_page);
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
    else if (required.any) {
        for (const field of required.any) {
            if (obj[field])
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
        for (const req of request.req) {
            if (typeof req === 'string') {
                if (request.appendable.except.includes(req))
                    continue;
                missing.delete(req);
                for (const obj of request.params[request.appendable.arrayNode]) {
                    const missingField = isMissingRequirement(obj, req);
                    if (missingField)
                        missing.add(missingField);
                }
            }
        }
    }
    if (missing.size)
        throw new Error(`Brak wymaganych pól: ${[...missing].join(', ')}`);
};
export const sendRequest = async (request, options = {}) => {
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
        'X-API-KEY': request.auth.apiKey,
        Accept: 'application/json'
    };
    request.next = false;
    const { method, node } = request.gate;
    let url = `${request.auth.url}/api/admin/v${request.auth.version}${node}`;
    if (options.log || options.dump) {
        console.log(inspect({ params: request.params, method, url }, { showHidden: false, depth: null, colors: true }));
        if (options.dump)
            return {};
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
export const countResults = async (request, options) => {
    const pageData = page(0, 1, request.snakeCase);
    Object.assign(request.params, pageData);
    const response = await sendRequest(request, options);
    if (!response)
        return 0;
    if (request.snakeCase)
        return parseInt(response.results_number_all);
    else
        return response.resultsNumberAll;
};
export const getParams = (request) => JSON.parse(JSON.stringify(request.params));
export const toString = (request) => JSON.stringify(request.params);
export const hasNext = (request) => request.next;
