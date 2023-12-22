import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putDiscountsGroupsProductsProducts", () => {
    const params = idosell().putDiscountsGroupsProducts.discountGroupId(206).products([{"id": 9,"price": 12,"currency": "PLN"}]).getParams();
    expect(params).toEqual({"discountGroupId":206,"products":[{"id":9,"price":12,"currency":"PLN"}]});
})