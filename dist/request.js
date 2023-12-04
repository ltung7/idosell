import axios from "axios";
import util from 'util';

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
    if (options.log) {
        console.log(util.inspect({ params: request.params, method, url }, {showHidden: false, depth: null, colors: true}))
    }
    
    if (method === 'get') {
        url += '?' + new URLSearchParams(request.params);
        return axios.get(url, { headers }).then(response => response.data).catch(catchIdosellError);
    } else {
        return axios[method](url, { params: request.params }, { headers }).then(response => response.data).catch(catchIdosellError);
    }    
}