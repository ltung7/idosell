import { paramsProxy } from "../params.js";

/**
 * The method allows to edit opinions about goods available in the IdoSell Shop administration panel.
 * @typedef {Object} PutProductsOpinionsOpinionsRequest
 * @property {(id: Integer) => PutProductsOpinionsOpinionsRequest} id 
 * @property {(confirmed: String) => PutProductsOpinionsOpinionsRequest} confirmed 
 * @property {(rating: Integer) => PutProductsOpinionsOpinionsRequest} rating 
 * @property {(content: String) => PutProductsOpinionsOpinionsRequest} content 
 * @property {(language: String) => PutProductsOpinionsOpinionsRequest} language Customer language ID.
 * @property {(shopAnswer: String) => PutProductsOpinionsOpinionsRequest} shopAnswer Reply to an opinion
 * @property {(picture: String) => PutProductsOpinionsOpinionsRequest} picture 
 * @property {(opinionConfirmedByPurchase: Boolean) => PutProductsOpinionsOpinionsRequest} opinionConfirmedByPurchase Opinion confirmed with purchase
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsOpinionsOpinionsRequest} The method allows to edit opinions about goods available in the IdoSell Shop administration panel.
 */
export const putProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}