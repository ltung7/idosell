import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsPricesDiscountsDiscount_value", () => {
    const params = idosell().putClientsPricesDiscounts.discount_type("simple").customers({"customers_numbers": [9]}).discount_operating("sum_with_other_discounts_to_orders").discount_value(10).getParams();
    expect(params).toEqual({"discount_type":"simple","customers":{"customers_numbers":[9]},"discount_operating":"sum_with_other_discounts_to_orders","discount_parameters":[{"discount_value":10}]});
})