import { paramsProxy } from "../params.js";

/**
 * Allows for downloading information about auctions and auction categories to which the product has been assigned (for a maximum of 100 products in one request)
 * @typedef {Object} GetProductsAuctionsRequest
 * @property {(products: Array<Object>) => GetProductsAuctionsRequest} products Products list.
 * @property {(auctionSites: Array<String>) => GetProductsAuctionsRequest} auctionSites Array of auction site IDs
 * @property {(resultsPage: Integer) => GetProductsAuctionsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsAuctionsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsAuctionsRequest} Allows for downloading information about auctions and auction categories to which the product has been assigned (for a maximum of 100 products in one request)
 */
export const getProductsAuctionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/auctions' }
    return new Proxy(object, paramsProxy);
}