import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteDiscountsGroupsProductsProducts", () => {
    const params = idosell().deleteDiscountsGroupsProducts.discountGroupId(206).products([9]).getParams();
    expect(params).toEqual({"discountGroupId":206,"products":[9]});
})