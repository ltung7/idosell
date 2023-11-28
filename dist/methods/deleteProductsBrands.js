import { paramsProxy } from "../params.js";

/**
 * The method allows you to remove brands from the administration panel..
 * @typedef {Object} DeleteProductsBrandsRequest
 * @property {(ids: Array<Integer>) => DeleteProductsBrandsRequest} ids #!IdentyfikatoryProducentow!#
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsBrandsRequest} The method allows you to remove brands from the administration panel..
 */
export const deleteProductsBrandsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/brands/delete' }
    return new Proxy(object, paramsProxy);
}