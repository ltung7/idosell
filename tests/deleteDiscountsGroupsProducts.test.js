import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteDiscountsGroupsProductsProducts", () => {
    const params = idosell().deleteDiscountsGroupsProducts.discountGroupId(206).products([9]).checkParams();
    expect(params).toEqual({"discountGroupId":206,"products":[9]});
})