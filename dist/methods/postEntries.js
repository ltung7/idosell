import { paramsProxy } from "../params.js";

/**
 * Enables adding blog or news entry 
 * @typedef {Object} PostEntriesRequest
 * @property {(shopId: Integer) => PostEntriesRequest} shopId Shop Id
 * @property {(date: String) => PostEntriesRequest} date Date of creating an entry
 * @property {(visible: String) => PostEntriesRequest} visible Entry visibility
 * @property {(visibleOnSitesList: Array<Object>) => PostEntriesRequest} visibleOnSitesList List of pages on which the entry is to be published
 * @property {(products: Array<Object>) => PostEntriesRequest} products Products list.
 * @property {(pictureData: Object) => PostEntriesRequest} pictureData Photo
 * @property {(langs: Array<Object>) => PostEntriesRequest} langs Element including entry content in selected languages
 * @property {(titleLinkType: String) => PostEntriesRequest} titleLinkType Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element
 * @property {(link: String) => PostEntriesRequest} link Provided URL (for link to specified URL option)
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostEntriesRequest} Enables adding blog or news entry 
 */
export const postEntriesProxy = (object) => {
    object.gate = { method: 'post', node: '/entries/entries' }
    return new Proxy(object, paramsProxy);
}