import { paramsProxy } from "../params.js";

/**
 * The method allows the removal of products from a discount group
 * @typedef {Object} DeleteDiscountsGroupsProductsRequest
 * @property {(discountGroupId: Integer) => DeleteDiscountsGroupsProductsRequest} discountGroupId Discount group ID
 * @property {(products: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} products Products list.
 * @property {(producers: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} producers Brands
 * @property {(series: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} series Series
 * @property {(categories: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} categories List of categories in which sought products are present.
 * @property {(menuItems: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} menuItems Menu elements
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteDiscountsGroupsProductsRequest} The method allows the removal of products from a discount group
 */
export const deleteDiscountsGroupsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/groups/products/delete' }
    return new Proxy(object, paramsProxy);
}