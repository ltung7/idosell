import { paramsProxy } from "../params.js";

/**
 * Allows you to download a list of sites on which a blog entry or a news item can be published.
 * @typedef {Object} GetEntriesPagesToDisplayRequest
 * @property {(langId: String) => GetEntriesPagesToDisplayRequest} langId Language ID
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetEntriesPagesToDisplayRequest} Allows you to download a list of sites on which a blog entry or a news item can be published.
 */
export const getEntriesPagesToDisplayProxy = (object) => {
    object.gate = { method: 'get', node: '/entries/pagesToDisplay' }
    return new Proxy(object, paramsProxy);
}