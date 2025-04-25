import { gateProxy } from "./gates.js";
const DEFAULT_VERSION = 5.4;

/**
 * Initializes the idosell API client.
 *
 * @param {string} url - The URL of the idosell API endpoint.
 * @param {string} apiKey - The API key for authentication.
 * @param {string} [version=DEFAULT_VERSION] - The version of the idosell API to use.
 * @returns {import('./gates.def.js').Gateways} Gateways Idosell connector - pick gate
 */
const idosell = (url, apiKey, version = DEFAULT_VERSION) => {
    const auth = { url, apiKey, version, apikey: apiKey.slice(0,6) + '*'.repeat(20) };
    Object.defineProperty(auth, 'apiKey', { enumerable: false });
    const element = { auth, params: {}};
    return new Proxy(element, gateProxy);
}

export default idosell;