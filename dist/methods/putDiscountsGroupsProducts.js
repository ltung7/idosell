import { paramsProxy } from "../params.js";

/**
 * The method allows products to be added to a discount group and their price to be specified in the discount group
 * @typedef {Object} PutDiscountsGroupsProductsRequest
 * @property {(discountGroupId: Integer) => PutDiscountsGroupsProductsRequest} discountGroupId Discount group ID
 * @property {(products: Array<Object>) => PutDiscountsGroupsProductsRequest} products Products list.
 * @property {(producers: Array<Object>) => PutDiscountsGroupsProductsRequest} producers Brands
 * @property {(series: Array<Object>) => PutDiscountsGroupsProductsRequest} series Series
 * @property {(categories: Array<Object>) => PutDiscountsGroupsProductsRequest} categories List of categories in which sought products are present.
 * @property {(menuItems: Array<Object>) => PutDiscountsGroupsProductsRequest} menuItems Menu elements
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutDiscountsGroupsProductsRequest} The method allows products to be added to a discount group and their price to be specified in the discount group
 */
export const putDiscountsGroupsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/groups/products' }
    return new Proxy(object, paramsProxy);
}