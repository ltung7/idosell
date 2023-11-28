import { paramsProxy } from "../params.js";

/**
 * Method that enables assigning individual discount to existing customer accounts.
 * @typedef {Object} PutClientsPricesDiscountsRequest
 * @property {(customers: Object) => PutClientsPricesDiscountsRequest} customers 
 * @property {(discount_type: String) => PutClientsPricesDiscountsRequest} discount_type Discount type, possible values: - simple
 * @property {(discount_operating: String) => PutClientsPricesDiscountsRequest} discount_operating Action, possible values: - sum_with_other_discounts_to_orders - sum with other discounts assigned to orders, - use_only_if_greater_than_the_sum_of_other_discounts - use only if greater than the sum of other discounts
 * @property {(discount_parameters: Array<Object>) => PutClientsPricesDiscountsRequest} discount_parameters 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsPricesDiscountsRequest} Method that enables assigning individual discount to existing customer accounts.
 */
export const putClientsPricesDiscountsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/prices/discounts' }
    return new Proxy(object, paramsProxy);
}