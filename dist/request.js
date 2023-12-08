import axios from "axios";
import util from 'util';
import qs from "qs";
import { page } from "./helpers.js";

const DECODE_TABLE = [
    [ 'Å\x82', "ł" ],
    [ 'Ä\x99', 'ę']
]

const catchIdosellError = (err) => {
    let message = err.response.headers['x-error'];
    for (const [ search, replace ] of DECODE_TABLE) {
        message = message.replaceAll(search, replace);
    }
    throw new Error(`${err.response.status}: ${message}`) 
}

export const sendRequest = async (request, options = {}) => {
    const headers = {
        'X-API-KEY': request.auth.apiKey,
        Accept: 'application/json'
    }
    const { method, node } = request.gate;
    let url = `${request.auth.url}/api/admin/v${request.auth.version}${node}`;
    if (options.log || options.dump) {
        console.log(util.inspect({ params: request.params, method, url }, {showHidden: false, depth: null, colors: true}))
    }

    if (options.dump) return;
    
    if (method === 'get') {
        url += '?' + qs.stringify(request.params, { arrayFormat: 'comma' });
        console.log({ url })
        return axios.get(url, { headers }).then(response => response.data).catch(catchIdosellError);
    } else {
        const params = request.rootparams ? request.params : { params: request.params };

        return axios[method](url, params, { headers }).then(response => response.data).catch(catchIdosellError);
    }    
}

export const countResults = async (request, options) => {
    const pageData = page(0, 1, request.snakeCase);
    Object.assign(request.params, pageData);
    const response = await sendRequest(request, options);
    if (request.snakeCase) return parseInt(response.results_number_all);
    else return response.resultsNumberAll;
}

export const toJson = async (request) => request.params;