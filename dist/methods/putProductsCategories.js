import { paramsProxy } from "../params.js";

/**
 * Method that enables adding new categories to the administration panel as well editing and deleting of existing categories.
 * @typedef {Object} PutProductsCategoriesRequest
 * @property {(categories: Array<Object>) => PutProductsCategoriesRequest} categories List of categories in which sought products are present.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsCategoriesRequest} Method that enables adding new categories to the administration panel as well editing and deleting of existing categories.
 */
export const putProductsCategoriesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/categories' }
    return new Proxy(object, paramsProxy);
}