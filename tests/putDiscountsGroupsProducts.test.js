import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putDiscountsGroupsProductsProducts", () => {
    const params = idosell().putDiscountsGroupsProducts.discountGroupId(206).products([{"id": 9,"price": 12,"currency": "PLN"}]).checkParams();
    expect(params).toEqual({"discountGroupId":206,"products":[{"id":9,"price":12,"currency":"PLN"}]});
})