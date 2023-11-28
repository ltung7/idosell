import { paramsProxy } from "../params.js";

/**
 * Enables changing blog or news entry in the shop
 * @typedef {Object} PutEntriesRequest
 * @property {(entryId: Integer) => PutEntriesRequest} entryId Entry ID
 * @property {(shopId: Integer) => PutEntriesRequest} shopId Shop Id
 * @property {(date: String) => PutEntriesRequest} date Date of creating an entry
 * @property {(visible: String) => PutEntriesRequest} visible Entry visibility
 * @property {(visibleOnSitesList: Array<Object>) => PutEntriesRequest} visibleOnSitesList List of pages on which the entry is to be published
 * @property {(products: Array<Object>) => PutEntriesRequest} products Products list.
 * @property {(pictureData: Object) => PutEntriesRequest} pictureData Photo
 * @property {(deletePicture: String) => PutEntriesRequest} deletePicture Determines whether to delete an entry photo
 * @property {(langs: Array<Object>) => PutEntriesRequest} langs Element including entry content in selected languages
 * @property {(titleLinkType: String) => PutEntriesRequest} titleLinkType Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element
 * @property {(link: String) => PutEntriesRequest} link Provided URL (for link to specified URL option)
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutEntriesRequest} Enables changing blog or news entry in the shop
 */
export const putEntriesProxy = (object) => {
    object.gate = { method: 'put', node: '/entries/entries' }
    return new Proxy(object, paramsProxy);
}