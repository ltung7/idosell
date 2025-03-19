import { gateProxy } from "./gates.js";
const DEFAULT_VERSION = 5;

/**
 * Initializes the idosell API client.
 *
 * @param {string} url - The URL of the idosell API endpoint.
 * @param {string} apiKey - The API key for authentication.
 * @param {string} [version=DEFAULT_VERSION] - The version of the idosell API to use.
 * @returns {import('./gates.def.js').Gateways} Gateways Idosell connector - pick gate
 */
const idosell = (url, apiKey, version = DEFAULT_VERSION) => {
    const element = { auth: { url, apiKey, version }, params: {}};
    return new Proxy(element, gateProxy);
}

export default idosell;